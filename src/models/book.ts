export interface BookResponse {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  layerInfo: LayerInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Epub;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface Epub {
  isAvailable: boolean;
  acsTokenLink: string;
}

export interface LayerInfo {
  layers: Layer[];
}

export interface Layer {
  layerId: string;
  volumeAnnotationsVersion: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: SaleInfoListPrice;
  retailPrice: SaleInfoListPrice;
  buyLink: string;
  offers: Offer[];
}

export interface SaleInfoListPrice {
  amount: number;
  currencyCode: string;
}

export interface Offer {
  finskyOfferType: number;
  listPrice: OfferListPrice;
  retailPrice: OfferListPrice;
}

export interface OfferListPrice {
  amountInMicros: number;
  currencyCode: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printedPageCount: number;
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}
