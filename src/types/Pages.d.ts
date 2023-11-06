type Page = {
	default: React.FC;
	isAuth: boolean;
	path:string
}

type PageComponent = Omit<Page, 'path'>
