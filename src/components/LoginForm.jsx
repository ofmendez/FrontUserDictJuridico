import { IconoEmail, IconoPassword } from '@components/icons.js';
import { LogoPositivo } from '@components/img.js';

const LoginForm = ({ handleSubmit }) => {
	return (
		<div className='ContenidoPagina'>
			<div className='SeccionLogin'>
				<img className='LogoLogin' src={LogoPositivo} />
				<p className='InstruccionLogin'>Inicia sesión como administrador</p>
				<div className='SeparadorSecciones' />
				<form className='FormaLogin' onSubmit={handleSubmit}>
					<div className='FilaLogin FilaLoginInput'><img className='IconosLogin' src={IconoEmail} />
						<input className='InputLogin' type='email' placeholder='Correo electrónico' name='email' />
					</div>
					<div className='FilaLogin FilaLoginInput'><img className='IconosLogin' src={IconoPassword} />
						<input className='InputLogin' type='password' placeholder='Contraseña' name='password' />
					</div>
					<div className='FilaLogin'>
						<button className='SubmitLogin' type='submit'>
							INGRESAR
						</button>
					</div>
				</form>
				<div className='EnlacesLogin'>
					<a href=''>
						<p>¿Olvidaste tu contraseña?</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
