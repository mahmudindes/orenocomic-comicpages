import {
	insertLanguage,
	selectLanguage,
	selectLanguageByIETF,
	updateLanguageByIETF as dbupdateLanguageByIETF,
	deleteLanguageByIETF as dbdeleteLanguageByIETF,
	existsLanguageByIETF as dbexistsLanguageByIETF,
	countLanguage as dbcountLanguage,
	insertWebsite,
	selectWebsite,
	selectWebsiteByDomain,
	updateWebsiteByDomain as dbupdateWebsiteByDomain,
	deleteWebsiteByDomain as dbdeleteWebsiteByDomain,
	existsWebsiteByDomain as dbexistsWebsiteByDomain,
	countWebsite as dbcountWebsite,
	insertCategoryType,
	selectCategoryType,
	selectCategoryTypeByCode,
	updateCategoryTypeByCode as dbupdateCategoryTypeByCode,
	deleteCategoryTypeByCode as dbdeleteCategoryTypeByCode,
	existsCategoryTypeByCode as dbexistsCategoryTypeByCode,
	countCategoryType as dbcountCategoryType,
	insertCategory,
	selectCategory,
	selectCategoryBySID,
	updateCategoryBySID as dbupdateCategoryBySID,
	deleteCategoryBySID as dbdeleteCategoryBySID,
	existsCategoryBySID as dbexistsCategoryBySID,
	countCategory as dbcountCategory,
	insertCategoryRelation,
	selectCategoryRelation,
	selectCategoryRelationBySID,
	updateCategoryRelationBySID as dbupdateCategoryRelationBySID,
	deleteCategoryRelationBySID as dbdeleteCategoryRelationBySID,
	existsCategoryRelationBySID as dbexistsCategoryRelationBySID,
	countCategoryRelation as dbcountCategoryRelation,
	insertTagType,
	selectTagType,
	selectTagTypeByCode,
	updateTagTypeByCode as dbupdateTagTypeByCode,
	deleteTagTypeByCode as dbdeleteTagTypeByCode,
	existsTagTypeByCode as dbexistsTagTypeByCode,
	countTagType as dbcountTagType,
	insertTag,
	selectTag,
	selectTagBySID,
	updateTagBySID as dbupdateTagBySID,
	deleteTagBySID as dbdeleteTagBySID,
	existsTagBySID as dbexistsTagBySID,
	countTag as dbcountTag,
	insertComic,
	selectComic,
	selectComicByCode,
	updateComicByCode as dbupdateComicByCode,
	deleteComicByCode as dbdeleteComicByCode,
	existsComicByCode as dbexistsComicByCode,
	countComic as dbcountComic,
	insertComicTitle,
	selectComicTitle,
	selectComicTitleBySID,
	updateComicTitleBySID as dbupdateComicTitleBySID,
	deleteComicTitleBySID as dbdeleteComicTitleBySID,
	existsComicTitleBySID as dbexistsComicTitleBySID,
	countComicTitle as dbcountComicTitle,
	insertComicCover,
	selectComicCover,
	selectComicCoverBySID,
	updateComicCoverBySID as dbupdateComicCoverBySID,
	deleteComicCoverBySID as dbdeleteComicCoverBySID,
	existsComicCoverBySID as dbexistsComicCoverBySID,
	countComicCover as dbcountComicCover,
	insertComicSynopsis,
	selectComicSynopsis,
	selectComicSynopsisBySID,
	updateComicSynopsisBySID as dbupdateComicSynopsisBySID,
	deleteComicSynopsisBySID as dbdeleteComicSynopsisBySID,
	existsComicSynopsisBySID as dbexistsComicSynopsisBySID,
	countComicSynopsis as dbcountComicSynopsis,
	insertComicExternal,
	selectComicExternal,
	selectComicExternalBySID,
	updateComicExternalBySID as dbupdateComicExternalBySID,
	deleteComicExternalBySID as dbdeleteComicExternalBySID,
	existsComicExternalBySID as dbexistsComicExternalBySID,
	countComicExternal as dbcountComicExternal,
	insertComicCategory,
	selectComicCategory,
	selectComicCategoryBySID,
	updateComicCategoryBySID as dbupdateComicCategoryBySID,
	deleteComicCategoryBySID as dbdeleteComicCategoryBySID,
	existsComicCategoryBySID as dbexistsComicCategoryBySID,
	countComicCategory as dbcountComicCategory,
	insertComicTag,
	selectComicTag,
	selectComicTagBySID,
	updateComicTagBySID as dbupdateComicTagBySID,
	deleteComicTagBySID as dbdeleteComicTagBySID,
	existsComicTagBySID as dbexistsComicTagBySID,
	countComicTag as dbcountComicTag,
	insertComicRelationType,
	selectComicRelationType,
	selectComicRelationTypeByCode,
	updateComicRelationTypeByCode as dbupdateComicRelationTypeByCode,
	deleteComicRelationTypeByCode as dbdeleteComicRelationTypeByCode,
	existsComicRelationTypeByCode as dbexistsComicRelationTypeByCode,
	countComicRelationType as dbcountComicRelationType,
	insertComicRelation,
	selectComicRelation,
	selectComicRelationBySID,
	updateComicRelationBySID as dbupdateComicRelationBySID,
	deleteComicRelationBySID as dbdeleteComicRelationBySID,
	existsComicRelationBySID as dbexistsComicRelationBySID,
	countComicRelation as dbcountComicRelation,
	insertComicChapter,
	selectComicChapter,
	selectComicChapterBySID,
	updateComicChapterBySID as dbupdateComicChapterBySID,
	deleteComicChapterBySID as dbdeleteComicChapterBySID,
	existsComicChapterBySID as dbexistsComicChapterBySID,
	countComicChapter as dbcountComicChapter
} from './database';
import { GenericError, NotFoundError, PermissionError } from './model';
import type {
	Language,
	NewLanguage,
	SetLanguage,
	ParLanguage,
	Website,
	NewWebsite,
	SetWebsite,
	ParWebsite,
	CategoryType,
	NewCategoryType,
	SetCategoryType,
	ParCategoryType,
	Category,
	NewCategory,
	SetCategory,
	CategorySID,
	ParCategory,
	CategoryRelation,
	NewCategoryRelation,
	SetCategoryRelation,
	CategoryRelationSID,
	ParCategoryRelation,
	TagType,
	NewTagType,
	SetTagType,
	ParTagType,
	Tag,
	NewTag,
	SetTag,
	TagSID,
	ParTag,
	Comic,
	NewComic,
	SetComic,
	ParComic,
	ComicGenericSID,
	ComicTitle,
	NewComicTitle,
	SetComicTitle,
	ParComicTitle,
	ComicCover,
	NewComicCover,
	SetComicCover,
	ParComicCover,
	ComicSynopsis,
	NewComicSynopsis,
	SetComicSynopsis,
	ParComicSynopsis,
	ComicExternal,
	NewComicExternal,
	SetComicExternal,
	ParComicExternal,
	ComicCategory,
	NewComicCategory,
	SetComicCategory,
	ComicCategorySID,
	ParComicCategory,
	ComicTag,
	NewComicTag,
	SetComicTag,
	ComicTagSID,
	ParComicTag,
	ComicRelationType,
	NewComicRelationType,
	SetComicRelationType,
	ParComicRelationType,
	ComicRelation,
	NewComicRelation,
	SetComicRelation,
	ComicRelationSID,
	ParComicRelation,
	ComicChapter,
	NewComicChapter,
	SetComicChapter,
	ComicChapterSID,
	ParComicChapter
} from './model';
import { tokenPermissionKey } from './auth';
import type { AccessToken } from './auth';

export async function addLanguage(v: NewLanguage, a?: AccessToken): Promise<Language> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add language');
	}

	return await insertLanguage(v);
}

export async function getLanguageByIETF(ietf: string): Promise<Language> {
	const r = await selectLanguageByIETF(ietf);

	if (!r) throw new NotFoundError('language does not exist');

	return r;
}

export async function updateLanguageByIETF(
	ietf: string,
	v: SetLanguage,
	a?: AccessToken
): Promise<Language | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update language');
	}

	if (!(await dbexistsLanguageByIETF(ietf))) {
		throw new NotFoundError('language does not exist');
	}

	return await dbupdateLanguageByIETF(ietf, v);
}

export async function deleteLanguageByIETF(ietf: string, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete language');
	}

	if (!(await dbdeleteLanguageByIETF(ietf))) {
		throw new NotFoundError('language does not exist');
	}
}

export async function listLanguage(params: ParLanguage): Promise<Language[]> {
	return await selectLanguage(params);
}

export async function countLanguage(params: ParLanguage): Promise<number> {
	return await dbcountLanguage(params);
}

export async function addWebsite(v: NewWebsite, a?: AccessToken): Promise<Website> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add website');
	}

	return await insertWebsite(v);
}

export async function getWebsiteByDomain(domain: string): Promise<Website> {
	const r = await selectWebsiteByDomain(domain);

	if (!r) throw new NotFoundError('website does not exist');

	return r;
}

export async function updateWebsiteByDomain(
	domain: string,
	v: SetWebsite,
	a?: AccessToken
): Promise<Website | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update website');
	}

	if (!(await dbexistsWebsiteByDomain(domain))) {
		throw new NotFoundError('website does not exist');
	}

	return await dbupdateWebsiteByDomain(domain, v);
}

export async function deleteWebsiteByDomain(domain: string, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete website');
	}

	if (!(await dbdeleteWebsiteByDomain(domain))) {
		throw new NotFoundError('website does not exist');
	}
}

export async function listWebsite(params: ParWebsite): Promise<Website[]> {
	return await selectWebsite(params);
}

export async function countWebsite(params: ParWebsite): Promise<number> {
	return await dbcountWebsite(params);
}

export async function addCategoryType(v: NewCategoryType, a?: AccessToken): Promise<CategoryType> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add category type');
	}

	return await insertCategoryType(v);
}

export async function getCategoryTypeByCode(code: string): Promise<CategoryType> {
	const r = await selectCategoryTypeByCode(code);

	if (!r) throw new NotFoundError('category type does not exist');

	return r;
}

export async function updateCategoryTypeByCode(
	code: string,
	v: SetCategoryType,
	a?: AccessToken
): Promise<CategoryType | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update category type');
	}

	if (!(await dbexistsCategoryTypeByCode(code))) {
		throw new NotFoundError('category type does not exist');
	}

	return await dbupdateCategoryTypeByCode(code, v);
}

export async function deleteCategoryTypeByCode(code: string, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete category type');
	}

	if (!(await dbdeleteCategoryTypeByCode(code))) {
		throw new NotFoundError('category type does not exist');
	}
}

export async function listCategoryType(params: ParCategoryType): Promise<CategoryType[]> {
	return await selectCategoryType(params);
}

export async function countCategoryType(params: ParCategoryType): Promise<number> {
	return await dbcountCategoryType(params);
}

export async function addCategory(v: NewCategory, a?: AccessToken): Promise<Category> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add category');
	}

	return await insertCategory(v);
}

export async function getCategoryBySID(sid: CategorySID): Promise<Category> {
	const r = await selectCategoryBySID(sid);

	if (!r) throw new NotFoundError('category does not exist');

	return r;
}

export async function updateCategoryBySID(
	sid: CategorySID,
	v: SetCategory,
	a?: AccessToken
): Promise<Category | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update category');
	}

	if (!(await dbexistsCategoryBySID(sid))) {
		throw new NotFoundError('category does not exist');
	}

	return await dbupdateCategoryBySID(sid, v);
}

export async function deleteCategoryBySID(sid: CategorySID, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete category');
	}

	if (!(await dbdeleteCategoryBySID(sid))) {
		throw new NotFoundError('category does not exist');
	}
}

export async function listCategory(params: ParCategory): Promise<Category[]> {
	return await selectCategory(params);
}

export async function countCategory(params: ParCategory): Promise<number> {
	return await dbcountCategory(params);
}

export async function addCategoryRelation(
	v: NewCategoryRelation,
	a?: AccessToken
): Promise<CategoryRelation> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add category relation');
	}

	return await insertCategoryRelation(v);
}

export async function getCategoryRelationBySID(
	sid: CategoryRelationSID
): Promise<CategoryRelation> {
	const r = await selectCategoryRelationBySID(sid);

	if (!r) throw new NotFoundError('category relation does not exist');

	return r;
}

export async function updateCategoryRelationBySID(
	sid: CategoryRelationSID,
	v: SetCategoryRelation,
	a?: AccessToken
): Promise<CategoryRelation | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update category relation');
	}

	if (!(await dbexistsCategoryRelationBySID(sid))) {
		throw new NotFoundError('category relation does not exist');
	}

	return await dbupdateCategoryRelationBySID(sid, v);
}

export async function deleteCategoryRelationBySID(
	sid: CategoryRelationSID,
	a?: AccessToken
): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete category relation');
	}

	if (!(await dbdeleteCategoryRelationBySID(sid))) {
		throw new NotFoundError('category relation does not exist');
	}
}

export async function listCategoryRelation(
	params: ParCategoryRelation
): Promise<CategoryRelation[]> {
	return await selectCategoryRelation(params);
}

export async function countCategoryRelation(params: ParCategoryRelation): Promise<number> {
	return await dbcountCategoryRelation(params);
}

export async function addTagType(v: NewTagType, a?: AccessToken): Promise<TagType> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add tag type');
	}

	return await insertTagType(v);
}

export async function getTagTypeByCode(code: string): Promise<TagType> {
	const r = await selectTagTypeByCode(code);

	if (!r) throw new NotFoundError('tag type does not exist');

	return r;
}

export async function updateTagTypeByCode(
	code: string,
	v: SetTagType,
	a?: AccessToken
): Promise<TagType | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update tag type');
	}

	if (!(await dbexistsTagTypeByCode(code))) {
		throw new NotFoundError('tag type does not exist');
	}

	return await dbupdateTagTypeByCode(code, v);
}

export async function deleteTagTypeByCode(code: string, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete tag type');
	}

	if (!(await dbdeleteTagTypeByCode(code))) {
		throw new NotFoundError('tag type does not exist');
	}
}

export async function listTagType(params: ParTagType): Promise<TagType[]> {
	return await selectTagType(params);
}

export async function countTagType(params: ParTagType): Promise<number> {
	return await dbcountTagType(params);
}

export async function addTag(v: NewTag, a?: AccessToken): Promise<Tag> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add tag');
	}

	return await insertTag(v);
}

export async function getTagBySID(sid: TagSID): Promise<Tag> {
	const r = await selectTagBySID(sid);

	if (!r) throw new NotFoundError('tag does not exist');

	return r;
}

export async function updateTagBySID(
	sid: TagSID,
	v: SetTag,
	a?: AccessToken
): Promise<Tag | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update tag');
	}

	if (!(await dbexistsTagBySID(sid))) {
		throw new NotFoundError('tag does not exist');
	}

	return await dbupdateTagBySID(sid, v);
}

export async function deleteTagBySID(sid: TagSID, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete tag');
	}

	if (!(await dbdeleteTagBySID(sid))) {
		throw new NotFoundError('tag does not exist');
	}
}

export async function listTag(params: ParTag): Promise<Tag[]> {
	return await selectTag(params);
}

export async function countTag(params: ParTag): Promise<number> {
	return await dbcountTag(params);
}

export async function addComic(v: NewComic, a?: AccessToken): Promise<Comic> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic');
	}

	const r: Comic = await insertComic(v);

	r.titles = [];
	r.covers = [];
	r.synopses = [];
	r.externals = [];
	r.categories = [];
	r.tags = [];
	r.relations = [];
	r.chapters = [];

	return r;
}

export async function getComicByCode(code: string): Promise<Comic> {
	const r: Comic | undefined = await selectComicByCode(code);

	if (r) {
		r.titles = await listComicTitle({ comicIDs: [r.id] });
		r.covers = await listComicCover({ comicIDs: [r.id] });
		r.synopses = await listComicSynopsis({ comicIDs: [r.id] });
		r.externals = await listComicExternal({ comicIDs: [r.id] });
		r.categories = await listComicCategory({ comicIDs: [r.id] });
		r.tags = await listComicTag({ comicIDs: [r.id] });
		r.relations = await listComicRelation({ parentIDs: [r.id] });
		r.chapters = await listComicChapter({ comicIDs: [r.id] });
	} else {
		throw new NotFoundError('comic does not exist');
	}

	return r;
}

export async function updateComicByCode(
	code: string,
	v: SetComic,
	a?: AccessToken
): Promise<Comic | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic');
	}

	if (!(await dbexistsComicByCode(code))) {
		throw new NotFoundError('comic does not exist');
	}

	const r: Comic | undefined = await dbupdateComicByCode(code, v);

	if (r) {
		r.titles = await listComicTitle({ comicIDs: [r.id] });
		r.covers = await listComicCover({ comicIDs: [r.id] });
		r.synopses = await listComicSynopsis({ comicIDs: [r.id] });
		r.externals = await listComicExternal({ comicIDs: [r.id] });
		r.categories = await listComicCategory({ comicIDs: [r.id] });
		r.tags = await listComicTag({ comicIDs: [r.id] });
		r.relations = await listComicRelation({ parentIDs: [r.id] });
		r.chapters = await listComicChapter({ comicIDs: [r.id] });
	}

	return r;
}

export async function deleteComicByCode(code: string, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic');
	}

	if (!(await dbdeleteComicByCode(code))) {
		throw new NotFoundError('comic does not exist');
	}
}

export async function listComic(params: ParComic): Promise<Comic[]> {
	const r: Comic[] = await selectComic(params);

	if (r.length > 0) {
		r.forEach((r) => {
			r.titles = [];
			r.covers = [];
			r.synopses = [];
			r.externals = [];
			r.categories = [];
			r.tags = [];
			r.relations = [];
			r.chapters = [];
		});

		const comicIDs = r.map((comic) => comic.id);

		const titles = await listComicTitle({ comicIDs });
		titles.forEach((title) => {
			r.forEach((r) => {
				if (r.id == title.comicID) r.titles?.push(title);
			});
		});
		const covers = await listComicCover({ comicIDs });
		covers.forEach((cover) => {
			r.forEach((r) => {
				if (r.id == cover.comicID) r.covers?.push(cover);
			});
		});
		const synopses = await listComicSynopsis({ comicIDs });
		synopses.forEach((synopsis) => {
			r.forEach((r) => {
				if (r.id == synopsis.comicID) r.synopses?.push(synopsis);
			});
		});
		const externals = await listComicExternal({ comicIDs });
		externals.forEach((external) => {
			r.forEach((r) => {
				if (r.id == external.comicID) r.externals?.push(external);
			});
		});
		const categories = await listComicCategory({ comicIDs });
		categories.forEach((category) => {
			r.forEach((r) => {
				if (r.id == category.comicID) r.categories?.push(category);
			});
		});
		const tags = await listComicTag({ comicIDs });
		tags.forEach((tag) => {
			r.forEach((r) => {
				if (r.id == tag.comicID) r.tags?.push(tag);
			});
		});
		const relations = await listComicRelation({ parentIDs: comicIDs });
		relations.forEach((relation) => {
			r.forEach((r) => {
				if (r.id == relation.parentID) r.relations?.push(relation);
			});
		});
		const chapters = await listComicChapter({ comicIDs });
		chapters.forEach((chapter) => {
			r.forEach((r) => {
				if (r.id == chapter.comicID) r.chapters?.push(chapter);
			});
		});
	}

	return r;
}

export async function countComic(params: ParComic): Promise<number> {
	return await dbcountComic(params);
}

export async function addComicTitle(v: NewComicTitle, a?: AccessToken): Promise<ComicTitle> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic title');
	}

	return await insertComicTitle(v);
}

export async function getComicTitleBySID(sid: ComicGenericSID): Promise<ComicTitle> {
	const r = await selectComicTitleBySID(sid);

	if (!r) throw new NotFoundError('comic title does not exist');

	return r;
}

export async function updateComicTitleBySID(
	sid: ComicGenericSID,
	v: SetComicTitle,
	a?: AccessToken
): Promise<ComicTitle | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic title');
	}

	if (!(await dbexistsComicTitleBySID(sid))) {
		throw new NotFoundError('comic title does not exist');
	}

	return await dbupdateComicTitleBySID(sid, v);
}

export async function deleteComicTitleBySID(sid: ComicGenericSID, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic title');
	}

	if (!(await dbdeleteComicTitleBySID(sid))) {
		throw new NotFoundError('comic title does not exist');
	}
}

export async function listComicTitle(params: ParComicTitle): Promise<ComicTitle[]> {
	return await selectComicTitle(params);
}

export async function countComicTitle(params: ParComicTitle): Promise<number> {
	return await dbcountComicTitle(params);
}

export async function addComicCover(v: NewComicCover, a?: AccessToken): Promise<ComicCover> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic cover');
	}

	return await insertComicCover(v);
}

export async function getComicCoverBySID(sid: ComicGenericSID): Promise<ComicCover> {
	const r = await selectComicCoverBySID(sid);

	if (!r) throw new NotFoundError('comic cover does not exist');

	return r;
}

export async function updateComicCoverBySID(
	sid: ComicGenericSID,
	v: SetComicCover,
	a?: AccessToken
): Promise<ComicCover | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic cover');
	}

	if (!(await dbexistsComicCoverBySID(sid))) {
		throw new NotFoundError('comic cover does not exist');
	}

	return await dbupdateComicCoverBySID(sid, v);
}

export async function deleteComicCoverBySID(sid: ComicGenericSID, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic cover');
	}

	if (!(await dbdeleteComicCoverBySID(sid))) {
		throw new NotFoundError('comic cover does not exist');
	}
}

export async function listComicCover(params: ParComicCover): Promise<ComicCover[]> {
	return await selectComicCover(params);
}

export async function countComicCover(params: ParComicCover): Promise<number> {
	return await dbcountComicCover(params);
}

export async function addComicSynopsis(
	v: NewComicSynopsis,
	a?: AccessToken
): Promise<ComicSynopsis> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic synopsis');
	}

	return await insertComicSynopsis(v);
}

export async function getComicSynopsisBySID(sid: ComicGenericSID): Promise<ComicSynopsis> {
	const r = await selectComicSynopsisBySID(sid);

	if (!r) throw new NotFoundError('comic synopsis does not exist');

	return r;
}

export async function updateComicSynopsisBySID(
	sid: ComicGenericSID,
	v: SetComicSynopsis,
	a?: AccessToken
): Promise<ComicSynopsis | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic synopsis');
	}

	if (!(await dbexistsComicSynopsisBySID(sid))) {
		throw new NotFoundError('comic synopsis does not exist');
	}

	return await dbupdateComicSynopsisBySID(sid, v);
}

export async function deleteComicSynopsisBySID(
	sid: ComicGenericSID,
	a?: AccessToken
): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic synopsis');
	}

	if (!(await dbdeleteComicSynopsisBySID(sid))) {
		throw new NotFoundError('comic synopsis does not exist');
	}
}

export async function listComicSynopsis(params: ParComicSynopsis): Promise<ComicSynopsis[]> {
	return await selectComicSynopsis(params);
}

export async function countComicSynopsis(params: ParComicSynopsis): Promise<number> {
	return await dbcountComicSynopsis(params);
}

export async function addComicExternal(
	v: NewComicExternal,
	a?: AccessToken
): Promise<ComicExternal> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic external');
	}

	return await insertComicExternal(v);
}

export async function getComicExternalBySID(sid: ComicGenericSID): Promise<ComicExternal> {
	const r = await selectComicExternalBySID(sid);

	if (!r) throw new NotFoundError('comic external does not exist');

	return r;
}

export async function updateComicExternalBySID(
	sid: ComicGenericSID,
	v: SetComicExternal,
	a?: AccessToken
): Promise<ComicExternal | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic external');
	}

	if (!(await dbexistsComicExternalBySID(sid))) {
		throw new NotFoundError('comic external does not exist');
	}

	return await dbupdateComicExternalBySID(sid, v);
}

export async function deleteComicExternalBySID(
	sid: ComicGenericSID,
	a?: AccessToken
): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic external');
	}

	if (!(await dbdeleteComicExternalBySID(sid))) {
		throw new NotFoundError('comic external does not exist');
	}
}

export async function listComicExternal(params: ParComicExternal): Promise<ComicExternal[]> {
	return await selectComicExternal(params);
}

export async function countComicExternal(params: ParComicExternal): Promise<number> {
	return await dbcountComicExternal(params);
}

export async function addComicCategory(
	v: NewComicCategory,
	a?: AccessToken
): Promise<ComicCategory> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic category');
	}

	return await insertComicCategory(v);
}

export async function getComicCategoryBySID(sid: ComicCategorySID): Promise<ComicCategory> {
	const r = await selectComicCategoryBySID(sid);

	if (!r) throw new NotFoundError('comic category does not exist');

	return r;
}

export async function updateComicCategoryBySID(
	sid: ComicCategorySID,
	v: SetComicCategory,
	a?: AccessToken
): Promise<ComicCategory | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic category');
	}

	if (!(await dbexistsComicCategoryBySID(sid))) {
		throw new NotFoundError('comic category does not exist');
	}

	return await dbupdateComicCategoryBySID(sid, v);
}

export async function deleteComicCategoryBySID(
	sid: ComicCategorySID,
	a?: AccessToken
): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic category');
	}

	if (!(await dbdeleteComicCategoryBySID(sid))) {
		throw new NotFoundError('comic category does not exist');
	}
}

export async function listComicCategory(params: ParComicCategory): Promise<ComicCategory[]> {
	return await selectComicCategory(params);
}

export async function countComicCategory(params: ParComicCategory): Promise<number> {
	return await dbcountComicCategory(params);
}

export async function addComicTag(v: NewComicTag, a?: AccessToken): Promise<ComicTag> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic tag');
	}

	return await insertComicTag(v);
}

export async function getComicTagBySID(sid: ComicTagSID): Promise<ComicTag> {
	const r = await selectComicTagBySID(sid);

	if (!r) throw new NotFoundError('comic tag does not exist');

	return r;
}

export async function updateComicTagBySID(
	sid: ComicTagSID,
	v: SetComicTag,
	a?: AccessToken
): Promise<ComicTag | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic tag');
	}

	if (!(await dbexistsComicTagBySID(sid))) {
		throw new NotFoundError('comic tag does not exist');
	}

	return await dbupdateComicTagBySID(sid, v);
}

export async function deleteComicTagBySID(sid: ComicTagSID, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic tag');
	}

	if (!(await dbdeleteComicTagBySID(sid))) {
		throw new NotFoundError('comic tag does not exist');
	}
}

export async function listComicTag(params: ParComicTag): Promise<ComicTag[]> {
	return await selectComicTag(params);
}

export async function countComicTag(params: ParComicTag): Promise<number> {
	return await dbcountComicTag(params);
}

export async function addComicRelationType(
	v: NewComicRelationType,
	a?: AccessToken
): Promise<ComicRelationType> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic relation type');
	}

	return await insertComicRelationType(v);
}

export async function getComicRelationTypeByCode(code: string): Promise<ComicRelationType> {
	const r = await selectComicRelationTypeByCode(code);

	if (!r) throw new NotFoundError('comic relation type does not exist');

	return r;
}

export async function updateComicRelationTypeByCode(
	code: string,
	v: SetComicRelationType,
	a?: AccessToken
): Promise<ComicRelationType | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic relation type');
	}

	if (!(await dbexistsComicRelationTypeByCode(code))) {
		throw new NotFoundError('comic relation type does not exist');
	}

	return await dbupdateComicRelationTypeByCode(code, v);
}

export async function deleteComicRelationTypeByCode(code: string, a?: AccessToken): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic relation type');
	}

	if (!(await dbdeleteComicRelationTypeByCode(code))) {
		throw new NotFoundError('comic relation type does not exist');
	}
}

export async function listComicRelationType(
	params: ParComicRelationType
): Promise<ComicRelationType[]> {
	return await selectComicRelationType(params);
}

export async function countComicRelationType(params: ParComicRelationType): Promise<number> {
	return await dbcountComicRelationType(params);
}

export async function addComicRelation(
	v: NewComicRelation,
	a?: AccessToken
): Promise<ComicRelation> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic relation');
	}

	return await insertComicRelation(v);
}

export async function getComicRelationBySID(sid: ComicRelationSID): Promise<ComicRelation> {
	const r = await selectComicRelationBySID(sid);

	if (!r) throw new NotFoundError('comic relation does not exist');

	return r;
}

export async function updateComicRelationBySID(
	sid: ComicRelationSID,
	v: SetComicRelation,
	a?: AccessToken
): Promise<ComicRelation | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic relation');
	}

	if (!(await dbexistsComicRelationBySID(sid))) {
		throw new NotFoundError('comic relation does not exist');
	}

	return await dbupdateComicRelationBySID(sid, v);
}

export async function deleteComicRelationBySID(
	sid: ComicRelationSID,
	a?: AccessToken
): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic relation');
	}

	if (!(await dbdeleteComicRelationBySID(sid))) {
		throw new NotFoundError('comic relation does not exist');
	}
}

export async function listComicRelation(params: ParComicRelation): Promise<ComicRelation[]> {
	return await selectComicRelation(params);
}

export async function countComicRelation(params: ParComicRelation): Promise<number> {
	return await dbcountComicRelation(params);
}

export async function addComicChapter(v: NewComicChapter, a?: AccessToken): Promise<ComicChapter> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to add comic chapter');
	}

	return await insertComicChapter(v);
}

export async function getComicChapterBySID(sid: ComicChapterSID): Promise<ComicChapter> {
	const r = await selectComicChapterBySID(sid);

	if (!r) throw new NotFoundError('comic chapter does not exist');

	return r;
}

export async function updateComicChapterBySID(
	sid: ComicChapterSID,
	v: SetComicChapter,
	a?: AccessToken
): Promise<ComicChapter | undefined> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to update comic chapter');
	}

	if (!(await dbexistsComicChapterBySID(sid))) {
		throw new NotFoundError('comic chapter does not exist');
	}

	return await dbupdateComicChapterBySID(sid, v);
}

export async function deleteComicChapterBySID(
	sid: ComicChapterSID,
	a?: AccessToken
): Promise<void> {
	if (!a?.hasPermission(tokenPermissionKey('write'))) {
		throw new PermissionError('missing admin permission to delete comic chapter');
	}

	if (!(await dbdeleteComicChapterBySID(sid))) {
		throw new NotFoundError('comic chapter does not exist');
	}
}

export async function listComicChapter(params: ParComicChapter): Promise<ComicChapter[]> {
	return await selectComicChapter(params);
}

export async function countComicChapter(params: ParComicChapter): Promise<number> {
	return await dbcountComicChapter(params);
}
