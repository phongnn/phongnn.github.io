import type { Page } from "astro";

type Theme = "light" | "dark";

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}

type SiteMeta = {
	title: string;
	description?: string;
	image?: string;
};

interface Post {
	title: string;
	description: string;
	url: string;
	publishDate: string;
}

export type { Page, Theme, IElement, SiteMeta, Post };
