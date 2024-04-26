export interface Image {
  alt_description: string | null | undefined;
  alternative_slugs?: AlternativeSlugs | null;
  asset_type?: string | null;
  blur_hash?: string | null;
  breadcrumbs?: Breadcrumbs[];
  color?: string;
  created_at: string | null;
  current_user_collections?: [];
  description?: string | null;
  height?: number;
  id: string;
  liked_by_user?: boolean;
  likes: number;
  links?: Links;
  promoted_at?: string | null;
  slug?: string;
  sponsorship?: string | null;
  tags?: Tags[];
  updated_at?: string | null;
  urls: Urls;
  user: User;
}

type AlternativeSlugs = {
  de: string;
  en: string;
  es: string;
  fr: string;
  it: string;
  ja: string;
  ko: string;
  pt: string;
};

type Breadcrumbs = {
  index: number;
  slug: string;
  title: string;
  type: string;
};

type Links = {
  html: string;
  self: string;
  download?: string;
  download_location?: string;
  followers?: string;
  following?: string;
  likes?: string;
  photos?: string;
  portfolio?: string;
};

type Urls = {
  regular: string;
  small: string;
  full?: string;
  raw?: string;
  small_s3?: string;
  thumb?: string;
};

type User = {
  accepted_tos: boolean;
  bio: string | null;
  first_name: string | null;
  for_hire: boolean;
  id: string;
  instagram_username: string | null;
  last_name: string | null;
  links: Links;
  location: string | null;
  name: string | null;
  portfolio_url: string | null;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  social: {
    instagram_username: string | null;
    portfolio_url: string | null;
    twitter_username: string | null;
    paypal_email: string | null;
  };
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: string | null;
  updated_at: string | null;
  username: string | null;
};

type Tags = {
  type: string | null;
  title: string | null;
  source: {
    ancestry: {
      type: AncestryType;
      category: AncestryType;
      subcategory: AncestryType;
    };
    title: string | null;
    subtitle: string | null;
    description: string | null;
    meta_title: string | null;
    meta_description: string | null;
    cover_photo: {
      id: string;
      slug: string | null;
      alternative_slugs: AlternativeSlugs;
      created_at: string | null;
      updated_at: string | null;
      promoted_at: string | null;
      width: number;
      height: number;
      color: string | null;
      blur_hash: string | null;
      description: string | null;
      alt_description: string | null;
      breadcrumbs: [];
      urls: Urls;
      links: Links;
      likes: number;
      liked_by_user: boolean;
      current_user_collections: [];
      sponsorship: string | null;
      topic_submissions: {
        animals: {
          status: string | null;
          approved_on: string | null;
        };
      };
      asset_type: string;
      user: User;
    };
  };
};

type AncestryType = {
  slug: string | null;
  pretty_slug: string | null;
};

export interface Response {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface ImageGalleryProps {
  image: Image | null;
  modalIsOpen: boolean;
  closeModal: () => void;
  afterOpenModal: () => void;
}
