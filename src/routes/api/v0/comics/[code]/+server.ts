import type { RequestHandler } from './$types';
import { deleteComicByCode, getComicByCode, updateComicByCode } from '$lib/server/service';
import { GenericError, NotFoundError, PermissionError } from '$lib/server/model';
import type { SetComic } from '$lib/server/model';
import {
	capitalPeriod,
	formDataDate,
	formDataNumber,
	headerBearerToken,
	response500
} from '$lib/server/helper';
import { AuthError, AuthErrorKind, parseAccessToken } from '$lib/server/auth';

export const GET: RequestHandler = async ({ params }) => {
	let reshd: { [h: string]: string } = {
		'Content-Type': 'application/json; charset=utf-8',
		'X-Content-Type-Options': 'nosniff'
	};

	try {
		const r = await getComicByCode(params.code);

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

		let v: SetComic = {};
		switch (request.headers.get('content-type')) {
			case 'application/json':
				v = await request.json();
				break;
			case 'application/x-www-form-urlencoded':
				const f = await request.formData();
				v.code = (f.get('code') as string | null) ?? undefined;
				v.languageID = formDataNumber(f.get('languageID'));
				v.languageIETF = (f.get('languageIETF') as string | null) ?? undefined;
				v.publishedFrom = formDataDate(f.get('publishedFrom'));
				v.publishedTo = formDataDate(f.get('publishedTo'));
				v.totalChapter = formDataNumber(f.get('totalChapter'));
				v.totalVolume = formDataNumber(f.get('totalVolume'));
				v.nsfw = formDataNumber(f.get('nsfw'));
				v.nsfl = formDataNumber(f.get('nsfl'));
				v.additionals = undefined;
				break;
		}

		const r = await updateComicByCode(params.code, v, a);

		if (!r) return new Response(undefined, { status: 204 });

		reshd['Location'] = new URL(request.url).pathname + '/' + r.code;
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

		await deleteComicByCode(params.code, a);

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
