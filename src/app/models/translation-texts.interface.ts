import { Language } from "./language.type";

export type TranslatedTexts  = {
    [key in Language]: {
        [key: string]: string
    }
}