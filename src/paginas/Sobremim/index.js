import styles from "./SobreMim.module.css";

import PostModelo from "componentes/Postmodelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/eu1.png"


export default function Sobremim() {
    return(
       <PostModelo
       
       fotoCapa={fotoCapa}
        titulo= "Sobre mim"
       
       >
        <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Lucas"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Oi, tudo bem?</p>
            <p className={styles.paragrafo}>Minha história com programação começou após ingressar na faculdade, onde tive o contato com lógica de programação para sistemas eletrônicos. Eu aprendi o básico de várias linguagens, como C#, Python, JavaScript, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.</p>
            <p className={styles.paragrafo}>Escolhi cursar Engenharia Elétrica, fiz diversos cursos no Senai com foco em sistemas digitais, atualmente sigo com meus estudos aprofundados em programação na escola Alura e também faço um bootcamp na CoderHouse para aperfeiçoar minhas habilidades como desenvolvedor Full Stack.</p>
            
       </PostModelo>
    )
}