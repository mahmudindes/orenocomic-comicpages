import type { RequestHandler } from './$types';
import { deleteLanguageByIETF, getLanguageByIETF, updateLanguageByIETF } from '$lib/server/service';
import { GenericError, NotFoundError, PermissionError } from '$lib/server/model';
import type { SetLanguage } from '$lib/server/model';
import { capitalPeriod, headerBearerToken, response500 } from '$lib/server/helper';
import { AuthError, AuthErrorKind, parseAccessToken } from '$lib/server/auth';

export const GET: RequestHandler = async ({ params }) => {
	let reshd: { [h: string]: string } = {
		'Content-Type': 'application/json; charset=utf-8',
		'X-Content-Type-Options': 'nosniff'
	};

	try {
		const r = await getLanguageByIETF(params.ietf);

		return new Response(JSON.stringify(r), { headers: reshd });
	} catch (e) {
		let r = response500;

		switch (true) {
			case e instanceof NotFoundError:
				r.error = { status: '404', detail: capitalPeriod(e.message) };
				break;
			case e instanceof GenericError:
				r.error = { status: '400', detail: capitalPeriod(e.message) };
				break;
			case e instanceof Error:
				console.log(e);
				break;
		}

		return new Response(JSON.stringify(r), { headers: reshd, status: Number(r.error.status) });
	}
};

export const PATCH: RequestHandler = async ({ params, request }) => {
	let reshd: { [h: string]: string } = {
		'Content-Type': 'application/json; charset=utf-8',
		'X-Content-Type-Options': 'nosniff'
	};

	try {
		const a = await parseAccessToken(headerBearerToken(request.headers.get('Authorization')));

		let v: SetLanguage = {};
		switch (request.headers.get('content-type')) {
			case 'application/json':
				v = await request.json();
				break;
			case 'application/x-www-form-urlencoded':
				const f = await request.formData();
				v.ietf = (f.get('ietf') as string | null) ?? undefined;
				v.name = (f.get('name') as string | null) ?? undefined;
				break;
		}

		const r = await updateLanguageByIETF(params.ietf, v, a);

		if (!r) return new Response(undefined, { status: 204 });

		reshd['Location'] = new URL(request.url).pathname + '/' + r.ietf;
		return new Response(JSON.stringify(r), { headers: reshd });
	} catch (e) {
		let r = response500;

		switch (true) {
			case e instanceof AuthError:
				switch (e.kind) {
					case AuthErrorKind.Malformed:
					case AuthErrorKind.Expired:
					case AuthErrorKind.Unauthorized:
						reshd['WWW-Authenticate'] = 'Bearer error="invalid_token"';
						r.error = { status: '401', detail: capitalPeriod(e.message) };
						break;
					case AuthErrorKind.Unknown:
						console.log(e);
						break;
				}
				break;
			case e instanceof PermissionError:
				r.error = { status: '403', detail: capitalPeriod(e.message) };
				break;
			case e instanceof NotFoundError:
				r.error = { status: '404', detail: capitalPeriod(e.message) };
				break;
			case e instanceof GenericError:
				r.error = { status: '400', detail: capitalPeriod(e.message) };
				break;
			case e instanceof Error:
				console.log(e);
				break;
		}

		return new Response(JSON.stringify(r), { headers: reshd, status: Number(r.error.status) });
	}
};

export const DELETE: RequestHandler = async ({ params, request }) => {
	let reshd: { [h: string]: string } = {
		'Content-Type': 'application/json; charset=utf-8',
		'X-Content-Type-Options': 'nosniff'
	};

	try {
		const a = await parseAccessToken(headerBearerToken(request.headers.get('Authorization')));

		await deleteLanguageByIETF(params.ietf, a);

		return new Response(undefined, { status: 204 });
	} catch (e) {
		let r = response500;

		switch (true) {
			case e instanceof AuthError:
				switch (e.kind) {
					case AuthErrorKind.Malformed:
					case AuthErrorKind.Expired:
					case AuthErrorKind.Unauthorized:
						reshd['WWW-Authenticate'] = 'Bearer error="invalid_token"';
						r.error = { status: '401', detail: capitalPeriod(e.message) };
						break;
					case AuthErrorKind.Unknown:
						console.log(e);
						break;
				}
				break;
			case e instanceof PermissionError:
				r.error = { status: '403', detail: capitalPeriod(e.message) };
				break;
			case e instanceof NotFoundError:
				r.error = { status: '404', detail: capitalPeriod(e.message) };
				break;
			case e instanceof GenericError:
				r.error = { status: '400', detail: capitalPeriod(e.message) };
				break;
			case e instanceof Error:
				console.log(e);
				break;
		}

		return new Response(JSON.stringify(r), { headers: reshd, status: Number(r.error.status) });
	}
};
