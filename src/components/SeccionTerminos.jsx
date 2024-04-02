import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Link } from 'react-router-dom';

import { Skeletons } from '@components/Skeletons.jsx';
import SeccionPalabraDelDia from '@components/SeccionPalabraDelDia.jsx';
import MainsSeparator from '@components/MainSeparator.jsx';
import TermsTable from '@components/TermsTable.jsx';
import { loadTerms } from '@src/hooks/LoaderData.jsx';

const SeccionTerminos = (props, ref) => {
	const [terms, setTerms] = useState([]);
	const [loadingTerms, setLoadingTerms] = useState('init');
	const [order, setOrder] = useState('asc');
	useEffect(() => loadTerms({ loadingTerms, setLoadingTerms, setTerms }), []);
	useImperativeHandle(ref, () => ({ getTerms: () => terms }));
	return (
		props.home
			? (
				<Skeletons on={loadingTerms} msg='Cargando'>
					<div className='SeccionInferiorColumnaIzquierdaHome'>
						<div className='SeccionTituloLink'>
							<h3>Palabras Recientes</h3>
							<Link to='/terms'><p>Ver todos</p></Link>
						</div>
						<MainsSeparator />
						<div className='ContenedorTablaRecientes ScrollVerde'>
							<TermsTable tableClass='TablaRecientes' terms={terms} home />
						</div>
					</div>
				</Skeletons>
			)
			: props.dayTerm
				? (
					<Skeletons on={loadingTerms} msg='Cargando'>
						<SeccionPalabraDelDia terms={terms} />
					</Skeletons>
				)
				:	(
					<div className='ContenidoPagina' id='SeccionContenidoHome'>
								
						<Skeletons on={loadingTerms} msg='Cargando'>
							<div className='SelectOrdenarPor'>
									<span>Ordenar por:  </span>
									<select className='SelectOrdenarPor' onChange={(e) => setOrder(e.target.value)}>
										<option value='asc'> De la A a la Z</option>
										<option value='desc'> De la Z a la A</option>
									</select>
								</div>
								<MainsSeparator />
							<div className='SeccionContenidoSubpagina'>
								<h3>Términos</h3>
								<MainsSeparator />
								<div className='ContenedorTabla ScrollVerde table-container'>
									<TermsTable tableClass='TablaUsuarios' showBy terms={terms} rowsState={props.rowsState} order={order}/>
								</div>
							</div>
						</Skeletons>
					</div>
				)
	);
};

export default forwardRef(SeccionTerminos);
