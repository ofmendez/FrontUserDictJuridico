import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import ContentFrame from '@src/components/ContentFrame';
import SearchFilters from '@src/components/SearchFilters';
import SearchResults from '@src/components/SearchResults';
import { Skeletons } from '@src/components/Skeletons';
import TermsSearchForm from '@src/components/TermsSearchForm';
import useSearchTerm from '@src/hooks/useSearchTerm';
import Menu from '@src/components/Menu';

const Search = () => {
	const [searchParams] = useSearchParams();
	const [loadingTerm, setLoadingTerm] = useState('init');

	const hasContent = (attr) => decodeURIComponent(searchParams.get('content')).split(',').includes(attr);
	const hasSubject = (attr) => decodeURIComponent(searchParams.get('subject')).split(',').includes(attr);
	const subjects = useRef({
		Doctrina: hasSubject('Doctrina'),
		Norma: hasSubject('Norma'),
		Jurisprudencia: hasSubject('Jurisprudencia')
	});
	const contents = useRef({
		term: hasContent('term'),
		'meanings.descriptor': hasContent('meanings.descriptor'),
		'meanings.definition': hasContent('meanings.definition'),
		'meanings.source': hasContent('meanings.source')
	});

	const results = useSearchTerm({
		q: searchParams.get('q'),
		subject: searchParams.get('subject'),
		content: searchParams.get('content'),
		setLoadingTerm
	});

	return (
		// <ContentFrame>
		<>
			<Menu	>
			<TermsSearchForm searchParams={searchParams} />
			<div className='ContenidoPagina' id='SeccionContenidoHome'>
				<div className='ContenidoUnaColumna'>
					<Skeletons on={loadingTerm} msg='Cargando'>
						<div className='SeccionContenidoBuscadorFiltros'>
							<SearchFilters contents={contents} subjects={subjects} searchParams={searchParams} />
							<SearchResults results={results} />
						</div>
					</Skeletons>
				</div>
			</div>
			</Menu>
		</>

		// </ContentFrame>
	);
};

export default Search;
