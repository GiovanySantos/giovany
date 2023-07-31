import { InternationalizationApiResponseType } from '../types/types';

const mockResponse: InternationalizationApiResponseType = {
  homePage: {
    title: {
      ptBR: 'Giovany Santos',
      en: 'Giovany Santos',
    },
    subTitle: {
      ptBR: 'Desenvolvedor web/backend',
      en: 'Web/backend software engineer',
    },
    buttons: [
      {
        ptBR: 'Quero um site',
        en: 'I want a website',
      },
      {
        ptBR: 'Carreira',
        en: 'Carreer',
      },
    ],
  },
  modalContacts: {
    title: {
      ptBR: 'Me conte um pouco sobre você e seu projeto',
      en: 'Tell me a little bit about you and your project',
    },
    regularFields: [
      {
        name: {
          label: {
            ptBR: 'Nome',
            en: 'Name',
          },
          placeholder: {
            ptBR: 'João',
            en: 'John',
          },
          type: 'text',
        },
      },
      {
        email: {
          label: {
            ptBR: 'Email',
            en: 'Email',
          },
          placeholder: {
            ptBR: 'joao.ferreira@gmail.com',
            en: 'john.smith@gmail.com',
          },
          type: 'email',
        },
      },
      {
        description: {
          label: {
            ptBR: 'Descrição',
            en: 'Description',
          },
          placeholder: {
            ptBR: 'Um site responsivo com um design moderno usando as cores azul e roxo...',
            en: 'A modern website, responsive, using the colors blue and purple...',
          },
          type: 'text',
        },
      },
    ],
    imageLabel: {
      ptBR: 'Se possível, envie uma imagem da sua ideia',
      en: 'Please, if possible, send an image of your idea',
    },
    buttonSend: {
      ptBR: 'Enviar',
      en: 'Send',
    },
  },
};

export default async function getPageTextContent(): Promise<InternationalizationApiResponseType> {
  const response: InternationalizationApiResponseType = mockResponse;
  return response;
}
