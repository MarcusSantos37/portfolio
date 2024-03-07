// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mediasCollection?: Maybe<MediasCollection>;
  projectsCollection?: Maybe<ProjectsCollection>;
  technologiesCollection?: Maybe<TechnologiesCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsMediasCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/medias) */
export type Medias = Entry & {
  __typename?: 'Medias';
  contentfulMetadata: ContentfulMetadata;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MediasLinkingCollections>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/medias) */
export type MediasIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/medias) */
export type MediasLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/medias) */
export type MediasLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/medias) */
export type MediasLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/medias) */
export type MediasNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MediasCollection = {
  __typename?: 'MediasCollection';
  items: Array<Maybe<Medias>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MediasFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediasFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediasFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MediasLinkingCollections = {
  __typename?: 'MediasLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MediasLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MediasOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type Projects = Entry & {
  __typename?: 'Projects';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<ProjectsLinkingCollections>;
  projectCodeLink?: Maybe<Scalars['String']['output']>;
  projectImage?: Maybe<Asset>;
  projectLiveLink?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  stacks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsProjectCodeLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsProjectImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsProjectLiveLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsProjectNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/projects) */
export type ProjectsStacksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsCollection = {
  __typename?: 'ProjectsCollection';
  items: Array<Maybe<Projects>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectCodeLink?: InputMaybe<Scalars['String']['input']>;
  projectCodeLink_contains?: InputMaybe<Scalars['String']['input']>;
  projectCodeLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  projectCodeLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectCodeLink_not?: InputMaybe<Scalars['String']['input']>;
  projectCodeLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  projectCodeLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  projectLiveLink?: InputMaybe<Scalars['String']['input']>;
  projectLiveLink_contains?: InputMaybe<Scalars['String']['input']>;
  projectLiveLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  projectLiveLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectLiveLink_not?: InputMaybe<Scalars['String']['input']>;
  projectLiveLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  projectLiveLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  projectName_contains?: InputMaybe<Scalars['String']['input']>;
  projectName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  projectName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectName_not?: InputMaybe<Scalars['String']['input']>;
  projectName_not_contains?: InputMaybe<Scalars['String']['input']>;
  projectName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stacks_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stacks_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stacks_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stacks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ProjectsLinkingCollections = {
  __typename?: 'ProjectsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectsOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProjectCodeLinkAsc = 'projectCodeLink_ASC',
  ProjectCodeLinkDesc = 'projectCodeLink_DESC',
  ProjectLiveLinkAsc = 'projectLiveLink_ASC',
  ProjectLiveLinkDesc = 'projectLiveLink_DESC',
  ProjectNameAsc = 'projectName_ASC',
  ProjectNameDesc = 'projectName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  medias?: Maybe<Medias>;
  mediasCollection?: Maybe<MediasCollection>;
  projects?: Maybe<Projects>;
  projectsCollection?: Maybe<ProjectsCollection>;
  technologies?: Maybe<Technologies>;
  technologiesCollection?: Maybe<TechnologiesCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryMediasArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMediasCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediasOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MediasFilter>;
};


export type QueryProjectsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectsFilter>;
};


export type QueryTechnologiesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TechnologiesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologiesFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/technologies) */
export type Technologies = Entry & {
  __typename?: 'Technologies';
  contentfulMetadata: ContentfulMetadata;
  id?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<TechnologiesLinkingCollections>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/technologies) */
export type TechnologiesIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/technologies) */
export type TechnologiesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/technologies) */
export type TechnologiesLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wdy5jxja98zi/content_types/technologies) */
export type TechnologiesNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologiesCollection = {
  __typename?: 'TechnologiesCollection';
  items: Array<Maybe<Technologies>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TechnologiesFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechnologiesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TechnologiesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TechnologiesLinkingCollections = {
  __typename?: 'TechnologiesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TechnologiesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TechnologiesOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type MediasQueryVariables = Exact<{ [key: string]: never; }>;


export type MediasQuery = { __typename?: 'Query', mediasCollection?: { __typename?: 'MediasCollection', items: Array<{ __typename?: 'Medias', id?: number | null, name?: string | null, link?: string | null, logo?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projectsCollection?: { __typename?: 'ProjectsCollection', items: Array<{ __typename?: 'Projects', id?: number | null, projectName?: string | null, projectLiveLink?: string | null, projectCodeLink?: string | null, stacks?: Array<string | null> | null, description?: string | null, projectImage?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type TechnologiesQueryVariables = Exact<{ [key: string]: never; }>;


export type TechnologiesQuery = { __typename?: 'Query', technologiesCollection?: { __typename?: 'TechnologiesCollection', items: Array<{ __typename?: 'Technologies', id?: number | null, name?: string | null, logo?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };



export const MediasDocument = `
    query medias {
  mediasCollection {
    items {
      id
      logo {
        title
        url
        width
        height
      }
      name
      link
    }
  }
}
    `;

export const useMediasQuery = <
      TData = MediasQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MediasQueryVariables,
      options?: UseQueryOptions<MediasQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<MediasQuery, TError, TData>(
      variables === undefined ? ['medias'] : ['medias', variables],
      fetcher<MediasQuery, MediasQueryVariables>(client, MediasDocument, variables, headers),
      options
    )};

export const ProjectsDocument = `
    query projects {
  projectsCollection {
    items {
      id
      projectName
      projectImage {
        url
      }
      projectLiveLink
      projectCodeLink
      stacks
      description
    }
  }
}
    `;

export const useProjectsQuery = <
      TData = ProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ProjectsQueryVariables,
      options?: UseQueryOptions<ProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<ProjectsQuery, TError, TData>(
      variables === undefined ? ['projects'] : ['projects', variables],
      fetcher<ProjectsQuery, ProjectsQueryVariables>(client, ProjectsDocument, variables, headers),
      options
    )};

export const TechnologiesDocument = `
    query technologies {
  technologiesCollection {
    items {
      id
      logo {
        title
        url
        width
        height
      }
      name
    }
  }
}
    `;

export const useTechnologiesQuery = <
      TData = TechnologiesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: TechnologiesQueryVariables,
      options?: UseQueryOptions<TechnologiesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<TechnologiesQuery, TError, TData>(
      variables === undefined ? ['technologies'] : ['technologies', variables],
      fetcher<TechnologiesQuery, TechnologiesQueryVariables>(client, TechnologiesDocument, variables, headers),
      options
    )};
