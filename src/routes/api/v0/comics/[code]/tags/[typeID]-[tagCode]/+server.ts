import type { RequestHandler } from './$types';
import { deleteComicTagBySID, getComicTagBySID, updateComicTagBySID } from '$lib/server/service';
import { GenericError, NotFoundError, PermissionError } from '$lib/server/model';
import type { SetComicTag } from '$lib/server/model';
import { capitalPeriod, formDataNumber, headerBearerToken, response500 } from '$lib/server/helper';
import { AuthError, AuthErrorKind, parseAccessToken } from '$lib/server/auth';

export const GET: RequestHandler = async ({ params }) => {
	let reshd: { [h: string]: string } = {
		'Content-Type': 'application/json; charset=utf-8',
		'X-Content-Type-Options': 'nosniff'
	};

	try {
		const r = await getComicTagBySID({
			comicCode: params.code,
			tagSID: {
				typeCode: params.typeID,
				code: params.tagCode
			}
		});

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

		let v: SetComicTag = {};
		switch (request.headers.get('content-type')) {
			case 'application/json':
				v = await request.json();
				v.comicID = undefined;
				v.comicCode = undefined;
				break;
			case 'application/x-www-form-urlencoded':
				const f = await request.formData();
				v.comicID = undefined;
				v.comicCode = undefined;
				v.tagID = formDataNumber(f.get('tagID'));
				v.tagTypeID = formDataNumber(f.get('tagTypeID'));
				v.tagTypeCode = (f.get('tagTypeCode') as string | null) ?? undefined;
				v.tagCode = (f.get('tagCode') as string | null) ?? undefined;
				break;
		}

		const r = await updateComicTagBySID(
			{
				comicCode: params.code,
				tagSID: {
					typeCode: params.typeID,
					code: params.tagCode
				}
			},
			v,
			a
		);

		if (!r) return new Response(undefined, { status: 204 });

		reshd['Location'] = new URL(request.url).pathname + '/' + r.tagTypeID + '-' + r.tagCode;
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

		await deleteComicTagBySID(
			{
				comicCode: params.code,
				tagSID: {
					typeCode: params.typeID,
					code: params.tagCode
				}
			},
			a
		);

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
