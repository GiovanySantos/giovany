export type InternationalizationValue = {
  ptBR?: String;
  en?: String;
};

export type HomePageInternationalization = {
  title: InternationalizationValue;
  subTitle: InternationalizationValue;
  buttons: InternationalizationValue[];
};

export type InternationalizationApiResponseType = {
  homePage: HomePageInternationalization;
};
