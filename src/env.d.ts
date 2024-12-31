/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NODEMAILER_HOST: string;
  readonly NODEMAILER_PORT: string;
  readonly NODEMAILER_USER: string;
  readonly NODEMAILER_PASSWORD: string;
  readonly NODEMAILER_MAILTO: string;
  readonly FORM_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
