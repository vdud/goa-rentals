export type PostMarkdownType = {
	content: string;
	frontmatter: FrontMatterType;
	postMarkdown: string;
};

export type FrontMatterType = {
	title: string;
	description: string;
	slug: string;
	published: string;
	category: string;
};
