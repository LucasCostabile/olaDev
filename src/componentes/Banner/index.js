import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/eu.png';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola, Dev!
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Lucas Costabile, desenvolvedor Full Stack junior. Aqui compartilho vários conhecimentos, espero que aprenda algo novo.
                </p>
                <p className={styles.paragrafo}>
                    Este projeto foi desenvolvido durante durante o curso de React Router :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt = "Foto do Lucas Costabile"
                />
            </div>
        </div>
    )
}