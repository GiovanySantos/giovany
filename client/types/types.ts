export type InternationalizationValue = {
  ptBR?: string;
  en?: string;
};

export type HomePageInternationalization = {
  title: InternationalizationValue;
  subTitle: InternationalizationValue;
  buttons: InternationalizationValue[];
};

type FieldIntenationalization = {
  label: InternationalizationValue;
  placeholder: InternationalizationValue;
  type: string;
};

type RegularFields = {
  [fieldName: string]: FieldIntenationalization;
};

export type ModalInternationalization = {
  title: InternationalizationValue;
  regularFields: RegularFields[];
  imageLabel: InternationalizationValue;
  buttonSend: InternationalizationValue;
};

export type InternationalizationApiResponseType = {
  homePage: HomePageInternationalization;
  modalContacts?: ModalInternationalization;
};
