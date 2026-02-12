/* Reset e Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #D5CDC2;
    font-family: "Acumin Pro", sans-serif;
    overflow-x: hidden;
}

/* =========================================== */
/* SEÇÃO UNIFICADA - VERSÃO FINAL SEM BURACOS  */
/* =========================================== */

.hero-vsl-unified {
    width: 100%;
    background-image: url('images/fotobg.png');
    background-size: cover;
    background-position: center top;
    padding: 100px 20px 60px; /* Reduzi um pouco o respiro geral */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-title {
    font-size: 65.70px;
    line-height: 1.1;
    margin-bottom: 20px;
    color: #421A25;
}

.divider-sm { 
    width: 133.94px; 
    height: 6px; 
    background: #BCB3A3; 
    margin: 0 auto 20px; 
}

.main-description {
    font-size: 27.89px;
    line-height: 1.4;
    max-width: 950px;
    margin: 0 auto 30px; /* Reduzi a margem inferior */
    color: #421A25;
}

.vsl-title {
    font-size: 40.24px;
    font-weight: 600;
    color: #421A25;
    margin-bottom: 15px; /* Título colado na divisória do vídeo */
}

.divider-vsl-custom { 
    width: 340px; 
    height: 4px; 
    background: #BCB3A3;
    border-radius: 9999px; 
    margin: 0 auto 25px; 
}
.s0-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 272.32px;
    height: 52px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 12.32px;
    border: 0.68px solid #FFCD74;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 18.33px;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;
}
/* CONTAINER DO VÍDEO */
.video-container {
    width: 100%;
    max-width: 821px;
    margin: 0 auto;
    background: #000;
    border-radius: 33px;
    border: 2px solid #FF5E00;
    box-shadow: 0 0 0 1px #FFAE0F;
    position: relative;
    height: 0;
    padding-bottom: 38.18%; /* Sua proporção desktop */
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    border: none;
}

/* --- AJUSTE MOBILE (O FOCO DA SUA RECLAMAÇÃO) --- */
@media (max-width: 768px) {
    .hero-vsl-unified {
        /* Reduzi drasticamente o padding para subir o conteúdo */
        padding: 50px 15px 30px !important; 
        background-image: url('images/fotobgmb.png') !important;
    }

    .main-title { 
        font-size: 28px !important; /* Tamanho mobile real */
        margin-bottom: 15px !important;
    }

    .divider-sm { 
        width: 80px !important; 
        height: 4px !important;
        margin-bottom: 15px !important;
    }

    .main-description { 
        font-size: 15px !important; 
        line-height: 1.3;
        margin-bottom: 25px !important;
    }

    .vsl-title { 
        font-size: 18px !important; 
        margin-bottom: 10px !important;
        margin-top: 0 !important; /* Tira o espaço de cima do "Assista" */
    }

    .divider-vsl-custom { 
        width: 120px !important; 
        margin-bottom: 20px !important;
    }

    .video-container { 
        border-radius: 15px;
        padding-bottom: 56.25% !important; /* Proporção 16:9 no mobile */
    }
}
.s01-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 272.32px;
    height: 52px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 12.32px;
    border: 0.68px solid #FFCD74;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 18.33px;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;
    margin: 0 auto;
}

.s01-btn-icon {
    width: 11px;
}

/* --- AJUSTE MOBILE --- */
@media (max-width: 768px) {
    .s01-btn {
        width: 170px;
        height: 38px;
        font-size: 12px;
        border-radius: 6px;
        gap: 8px;
        margin: 0 auto;
    }
    
    .s01-btn-icon {
        width: 9px;
        height: 9px;
    }
}
/* --- SEÇÃO 3 (DESKTOP) --- */
.section-cta {
    width: 100%;
    min-height: 80vh;
    background: linear-gradient(135deg, #5E2B3E 0%, #2A0C10 100%);
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-cta {
    width: 100%;
    max-width: 900px; 
    display: flex;
    flex-direction: column; /* ALTERADO: Para empilhar título e form */
    justify-content: center; /* ALTERADO: Para centralizar no meio */
    align-items: center;    /* ALTERADO: Para alinhar horizontalmente */
    gap: 40px;
}

.cta-title {
    color: white;
    font-family: "Acumin Pro", sans-serif;
    font-size: 34.98px;
    font-weight: 600;
    line-height: 41.63px;
    text-align: center; /* ALTERADO: Para o texto ficar no meio */
}

.cta-form-box {
    width: 100%;
    max-width: 381.67px;
    padding: 40px;
    background: rgba(217, 217, 217, 0.09);
    border-radius: 33.04px;
    border: 0.43px #CBC0AE solid;
    backdrop-filter: blur(10px);
}

.input-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.input-group label {
    color: white;
    font-size: 15.61px;
    margin-bottom: 8px;
    font-family: "Acumin Pro", sans-serif;
}

.input-group input {
    background: rgba(217, 217, 217, 0.09);
    border: 0.43px #CBC0AE solid;
    border-radius: 6.09px;
    padding: 12px 15px;
    color: white;
    font-size: 15.61px;
    outline: none;
    transition: border-color 0.3s ease;
}

.input-group input:focus {
    border-color: #FFCD74;
    box-shadow: 0 0 0 2px rgba(255, 205, 116, 0.2);
}

.input-group input::placeholder {
    color: #8E7078;
}

.btn-submit {
    width: 100%;
    height: 45px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 7.82px;
    border: 0.43px #FFCD74 solid;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 11.64px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    transition: all 0.3s ease !important;
}

.btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(178, 135, 57, 0.3);
}

.btn-submit:active {
    transform: scale(0.98);
}

.btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed !important;
    transform: none !important;
    box-shadow: none !important;
}

/* Estilo para o botão quando está em estado de sucesso */
.btn-submit.success {
    background: #4CAF50 !important;
    background-image: none !important;
    border-color: #45a049 !important;
    color: white !important;
    cursor: default !important;
    opacity: 1 !important;
    transform: none !important;
    box-shadow: none !important;
}

.btn-icon {
    width: 12px;
}

.form-footer-text {
    text-align: center;
    color: white;
    font-size: 12.49px;
    font-style: italic;
    line-height: 14.86px;
    margin-top: 25px;
    font-family: "Acumin Pro", sans-serif;
}

/* --- AJUSTES MOBILE --- */
@media (max-width: 768px) {
    .section-hero {
        background-image: url('images/fotobgmb.png') !important;
        min-height: auto;
        padding: 60px 20px 30px 20px;
        background-position: center top;
    }

    .hero-title {
        font-size: 26px;
        line-height: 30px;
    }

    .hero-description {
        font-size: 14px;
        line-height: 18px;
    }

    .main-divider-container {
        margin-top: 15px; 
    }

   .section-vsl {
        padding-top: 40px; 
        padding-bottom: 50px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .vsl-title {
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 15px;
    }
    
    /* Ajustes mobile para seção 3 */
    .section-cta {
        min-height: auto;
        padding: 60px 20px;
    }
    
    .container-cta {
        flex-direction: column;
        gap: 30px;
    }

    .cta-title {
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }

    .cta-form-box {
        padding: 30px 20px;
        max-width: 320px;
        border-radius: 13.94px;
    }

    .input-group {
        align-items: flex-start; 
        text-align: left;
    }

    .input-group label {
        font-size: 13px;
        width: 100%;
        text-align: left;
    }

    .input-group input {
        width: 100%;
        font-size: 13px;
    }

    .btn-submit {
        height: 40px;
        font-size: 10px;
    }

    .form-footer-text {
        font-size: 10px;
    }
}

/* Ajustes para tablets */
@media (min-width: 769px) and (max-width: 1024px) {
    .container-cta {
        max-width: 800px;
        gap: 30px;
    }
    
    .cta-title {
        font-size: 28px;
        line-height: 34px;
    }
    
    .hero-title {
        font-size: 50px;
        line-height: 60px;
    }
    
    .hero-description {
        font-size: 24px;
        line-height: 30px;
    }
}
/* =========================================== */
/* ESTILOS PARA O BOTÃO DE SUCESSO (VERDE) */
/* =========================================== */

/* Botão em estado de sucesso */
.btn-submit.sucesso {
    background: #4CAF50 !important;
    background-image: none !important;
    border-color: #45a049 !important;
    color: white !important;
    cursor: default !important;
    opacity: 1 !important;
    transform: none !important;
    box-shadow: none !important;
}

/* Estilos inline do JavaScript terão prioridade, 
   mas esta classe garante o estilo se necessário */

/* Animação para mensagem flutuante */
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

/* --- SEÇÃO 5 - BENEFÍCIOS COM DIVISÓRIA E SETA --- */
.section-benefits {
    background-color: #D4CDC1;
    padding: 80px 20px 60px; /* AJUSTADO: mais padding-top para o título aparecer */
    text-align: center;
    position: relative;
    width: 100%;
}

/* DIVISÓRIA E SETA - IGUALZINHA À QUE ESTAVA NA SEÇÃO 4 */
.section-benefits .divider-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-benefits .divider-line {
    width: 100%;
    height: 4px;
    background-color: #CBC0AE;
}

.section-benefits .arrow-only {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -28px;
}

.section-benefits .arrow-img-file {
    width: 56px;
    height: auto;
}

/* TÍTULO "O que é a Central da Menopausa" - GRANDÃO DESKTOP */
.section-benefits .about-title {
    color: #421A25;
    font-size: 59.42px;
    font-family: 'Acumin Pro', sans-serif;
    font-weight: 700;
    line-height: 1.1;
    margin-top: 40px; /* AJUSTADO: mais espaço para não ficar coberto pela seta */
    margin-bottom: 50px;
}

/* TÍTULO DOS BENEFÍCIOS - MENOR */
.section-benefits .benefits-title {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 50.18px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 50px;
}

.section-benefits .benefits-title strong {
    font-weight: 600;
}

/* GRID DE BENEFÍCIOS DESKTOP */
.section-benefits .benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, 218px);
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
}

/* CARDS */
.section-benefits .benefit-card {
    background-color: #421A25;
    border: 0.82px solid #B28739;
    border-radius: 12.28px;
    width: 218px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

/* NÚMEROS DOS CARDS */
.section-benefits .card-number-wrapper {
    position: relative;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
}

.section-benefits .outer-ring {
    position: absolute;
    width: 64px;
    height: 64px;
    border: 0.61px solid #B28739;
    border-radius: 50%;
}

.section-benefits .inner-circle {
    width: 48px;
    height: 48px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4E3404;
    font-size: 38px;
    font-weight: 600;
}

/* TEXTO DOS CARDS */
.section-benefits .card-text {
    color: white;
    font-size: 20px;
    line-height: 1.1;
    text-align: center;
}

/* ========== VERSÃO MOBILE ========== */
@media (max-width: 768px) {
    .section-benefits {
        padding: 50px 10px;
        position: relative;
    }

    /* AJUSTES DA SETA MOBILE */
    .section-benefits .arrow-only {
        top: -16px;
    }

    .section-benefits .arrow-img-file {
        width: 32px;
    }

    /* TÍTULO MOBILE - 28px */
    .section-benefits .about-title {
        font-size: 28px;
        margin-top: 30px;
        margin-bottom: 25px;
    }

    /* TÍTULO DOS BENEFÍCIOS MOBILE - 16.38px */
    .section-benefits .benefits-title {
        font-size: 16.38px;
        line-height: 1.2;
        margin-bottom: 40px;
    }

    /* GRID MOBILE - 2 COLUNAS */
    .section-benefits .benefits-grid {
        grid-template-columns: repeat(2, 140px);
        justify-content: center;
        gap: 15px;
    }

    /* CARDS MOBILE */
    .section-benefits .benefit-card {
        width: 140px;
        height: 130px;
        border-radius: 8px;
        border-width: 0.5px;
        padding: 10px;
    }

    /* NÚMEROS MOBILE */
    .section-benefits .card-number-wrapper {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    .section-benefits .outer-ring {
        width: 40px;
        height: 40px;
        border-width: 0.4px;
    }

    .section-benefits .inner-circle {
        width: 30px;
        height: 30px;
        font-size: 20px;
    }

    /* TEXTO DOS CARDS MOBILE */
    .section-benefits .card-text {
        font-size: 12px;
        line-height: 1.2;
    }
}

/* ========== TABLETS ========== */
@media (min-width: 769px) and (max-width: 1024px) {
    .section-benefits .benefits-grid {
        grid-template-columns: repeat(4, 180px);
        gap: 15px;
    }
    
    .section-benefits .benefit-card {
        width: 180px;
        height: 180px;
    }
    
    .section-benefits .card-text {
        font-size: 18px;
    }
}
/* --- SEÇÃO 6 COMPLETA --- */
.section-6 {
    position: relative;
    width: 100%;
    padding: 100px 0;
    /* Background Radial Gradient exato do Figma */
    background: radial-gradient(ellipse 92.94% 84.64% at 92.31% 13.19%, #5E2B3E 0%, #2A0C10 100%);
    overflow: hidden;
    display: flex;
    align-items: center;
}

/* Foto de Fundo Desktop */
.section-6::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/fotosudesktop.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    z-index: 1;
    pointer-events: none;
}

.container-s6 {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding-left: 10%;
}

.s6-title {
    color: white;
    font-size: 45.47px;
    font-family: 'Acumin Pro', sans-serif;
    font-weight: 600;
    line-height: 54.11px;
    margin-bottom: 40px;
}

.s6-list {
    list-style: none;
    padding: 0;
    margin-bottom: 40px;
}

.s6-list li {
    color: white;
    font-size: 19.53px;
    font-family: 'Acumin Pro', sans-serif;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 25px;
    padding-left: 25px;
    position: relative;
}

/* Bullet Dourado */
.s6-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 4px;
    width: 7.05px;
    height: 7.05px;
    border-radius: 50%;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
}

/* Retângulo de Compromisso Desktop */
.s6-commitment {
    width: 467.12px;
    background: rgba(217, 217, 217, 0.22);
    border-radius: 7.93px;
    padding: 15px 20px;
    margin-bottom: 50px;
}

.s6-commitment p {
    color: white;
    font-size: 17.61px;
    font-family: 'Acumin Pro', sans-serif;
    font-style: italic;
    font-weight: 400;
    line-height: 19.20px;
    margin: 0;
}

/* Botão Desktop */
.s6-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 372.32px;
    height: 52px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 12.32px;
    border: 0.68px #FFCD74 solid;
    color: white;
    font-size: 18.33px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    line-height: 30.54px;
    text-decoration: none;
    gap: 15px;
}

.s6-btn-icon {
    width: 14px;
}

/* --- VERSÃO MOBILE AJUSTADA E COMPLETA --- */
@media (max-width: 768px) {
    .section-6 {
        padding: 50px 0;
        text-align: center;
        background: radial-gradient(ellipse 92.94% 84.64% at 92.31% 13.19%, #5E2B3E 0%, #2A0C10 100%);
    }

    .section-6::before {
        background-image: url('images/fotosumobile.png');
        background-position: center bottom;
        background-size: cover;
        opacity: 0.4;
    }

    .container-s6 {
        padding: 0 25px;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Título Mobile padronizado */
    .s6-title {
        font-size: 24px; 
        line-height: 28px;
        margin-bottom: 25px;
    }

    /* Lista Mobile - Tamanho equilibrado */
    .s6-list {
        display: inline-block;
        text-align: left;
        margin-bottom: 25px;
    }

    .s6-list li {
        font-size: 12px; 
        line-height: 1.3;
        margin-bottom: 12px;
        padding-left: 15px;
    }

    .s6-list li::before {
        width: 4px;
        height: 4px;
        top: 6px;
    }

    /* Retângulo de Compromisso Justificado à Esquerda */
    .s6-commitment {
        width: 100%;
        max-width: 280px;
        height: auto;
        padding: 12px 15px;
        margin-bottom: 15px; /* Valor reduzido para subir o botão */
        display: block; /* Alterado para permitir justificativa à esquerda */
        text-align: left;
        background: rgba(217, 217, 217, 0.22);
        border-radius: 4px;
    }

    .s6-commitment p {
        font-size: 10.5px; 
        line-height: 13px;
        text-align: left; /* Texto à esquerda conforme solicitado */
        margin: 0;
    }

    /* Botão Mobile - Posicionado mais acima */
    .s6-button {
        width: 170px; 
        height: 38px;
        font-size: 12px;
        border-radius: 6px;
        gap: 8px;
    }

    .s6-btn-icon {
        width: 9px;
        height: 9px;
    }
}
/* --- SEÇÃO 7 ATUALIZADA --- */

.s7-target-audience {
    width: 100%;
    background: radial-gradient(ellipse 92.94% 84.64% at 92.31% 13.19%, #5E2B3E 0%, #2A0C10 100%);
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.s7-top-divider {
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 9999px;
    margin-bottom: 60px;
}

.s7-container {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    text-align: center;
}

/* Título Desktop */
.s7-title {
    margin-bottom: 50px;
}

.s7-emoji {
    font-size: 45.47px;
}

.s7-text {
    color: white;
    font-size: 45.47px;
    font-family: 'Acumin Pro', sans-serif;
    font-weight: 600;
    line-height: 54.11px;
}

/* Boxes Desktop */
.s7-info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.s7-info-box {
    width: 100%;
    max-width: 681px;
    height: 54.37px;
    background: rgba(24.41, 209.20, 0, 0.16);
    border-radius: 9px;
    /* Traçado APENAS no lado esquerdo */
    border: none;
    border-left: 4px solid #18D100; 
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 15px;
}

.s7-icon {
    width: 30px;
    height: auto;
}

.s7-info-text {
    color: white;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 20px;
}

/* --- VERSÃO MOBILE (TUDO GRANDE E VISÍVEL) --- */
@media (max-width: 768px) {
    .s7-top-divider {
        margin-bottom: 40px;
    }

    /* Título Mobile padrão do site (24px) */
    .s7-emoji, .s7-text {
        font-size: 24px;
        line-height: 28px;
    }

    .s7-title {
        margin-bottom: 30px;
    }

    /* Boxes Mobile */
    .s7-info-box {
        max-width: 95%; 
        height: auto;
        min-height: 50px;
        padding: 12px 15px;
        border-radius: 6px;
        border: none;
        border-left: 3px solid #18D100; /* Borda esquerda no mobile */
        margin: 0 auto;
    }

    .s7-icon {
        width: 20px;
    }

    /* Texto Mobile (16px) */
    .s7-info-text {
        font-size: 16px;
        line-height: 1.2;
        text-align: left;
    }

    .s7-info-wrapper {
        gap: 15px;
    }
}
/* --- SEÇÃO 8 --- */

.s8-not-for-you {
    width: 100%;
    /* Background Radial igual à Seção 7 para continuidade */
    background: radial-gradient(ellipse 92.94% 84.64% at 92.31% 13.19%, #5E2B3E 0%, #2A0C10 100%);
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.s8-top-divider {
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 9999px;
    margin-bottom: 60px;
}

.s8-container {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    text-align: center;
}

/* Título Desktop */
.s8-title {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.s8-emoji {
    font-size: 45.47px;
    font-family: 'Acumin Pro', sans-serif;
    font-weight: 400;
}

.s8-text {
    color: white;
    font-size: 45.47px;
    font-family: 'Acumin Pro', sans-serif;
    font-weight: 600;
    line-height: 54.11px;
}

/* Boxes Desktop - Vermelho com Traçado à Esquerda */
.s8-info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.s8-info-box {
    width: 100%;
    max-width: 757px;
    height: 54px;
    background: rgba(209, 0, 0, 0.16); /* Vermelho translúcido */
    border-radius: 9px;
    border: none;
    border-left: 4px solid #FF0000; /* Traçado apenas no início/lado esquerdo */
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 15px;
}

.s8-icon {
    width: 26.88px;
    height: 26.06px;
}

.s8-info-text {
    color: white;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 20px;
    font-weight: 400;
}

/* --- VERSÃO MOBILE (PADRONIZADA COM O SITE) --- */
@media (max-width: 768px) {
    .s8-top-divider {
        margin-bottom: 40px;
    }

    /* Título Mobile padrão do site (24px) */
    .s8-emoji, .s8-text {
        font-size: 24px;
        line-height: 28px;
    }

    .s8-title {
        margin-bottom: 30px;
    }

    /* Boxes Mobile */
    .s8-info-box {
        max-width: 95%; 
        height: auto;
        min-height: 50px;
        padding: 12px 15px;
        border-radius: 6px;
        border: none;
        border-left: 3px solid #FF0000; /* Borda esquerda vermelha */
        margin: 0 auto;
    }

    .s8-icon {
        width: 18px;
        height: auto;
    }

    /* Texto Mobile visível (16px) */
    .s8-info-text {
        font-size: 16px;
        line-height: 1.2;
        text-align: left;
    }

    .s8-info-wrapper {
        gap: 15px;
    }
}
/* --- SEÇÃO 9 --- */

.s9-biography {
    width: 100%;
    background-color: #D4CDC1;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
}

.s9-container {
    width: 100%;
    max-width: 1100px;
}

.s9-title {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 39.95px;
    font-weight: 700;
    line-height: 47.53px;
    text-align: center;
    margin-bottom: 60px;
}

.s9-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.s9-text-col {
    flex: 1;
    text-align: left;
}

.s9-description {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 21.02px;
    line-height: 25.01px;
    margin-bottom: 30px;
}

.s9-description .w-400 { font-weight: 400; }
.s9-description .w-600 { font-weight: 600; }
.s9-description .w-700 { font-weight: 700; }

/* Botão Estilizado */
.s9-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 372.32px;
    height: 52px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 12.32px;
    border: 0.68px #FFCD74 solid;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 18.33px;
    font-weight: 500;
    text-decoration: none;
    gap: 12px;
    transition: transform 0.2s;
}

.s9-button:hover { transform: scale(1.02); }

.s9-btn-icon {
    width: 14px;
}

.s9-image-col {
    flex-shrink: 0;
}

.s9-img {
    width: 368px;
    height: 444px;
    border-radius: 43px;
    object-fit: cover;
}

.mobile-only { display: none; }

/* --- VERSÃO MOBILE --- */
@media (max-width: 768px) {
    .s9-biography {
        padding: 60px 20px;
    }

    .s9-content {
        flex-direction: column;
        gap: 30px;
    }

    .s9-title {
        font-size: 24px; /* Padronizado com os outros títulos mobile do seu site */
        line-height: 28px;
        margin-bottom: 30px;
    }

    .s9-description {
        font-size: 16px; /* Padronizado com os outros textos mobile */
        line-height: 1.3;
        text-align: left;
    }

    .s9-img {
        width: 100%;
        max-width: 280px;
        height: auto;
        border-radius: 19.78px;
    }

    .s9-button {
        width: 220px;
        height: 45px;
        font-size: 14px;
        border-radius: 8px;
    }

    .desktop-only { display: none; }
    .mobile-only { display: block; text-align: center; width: 100%; }
}
/* --- SEÇÃO 10: COMO ACESSAR --- */
.s10-access {
    background-color: #D4CDC1;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.s10-divider {
    width: 100%;
    height: 4px;
    background-color: #421A25;
    border-radius: 9999px;
    margin-bottom: 60px;
}

.s10-container {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    text-align: center;
}

.s10-title {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 39.95px;
    font-weight: 700;
    line-height: 47.53px;
    margin-bottom: 10px;
}

.s10-subtitle {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 31.95px;
    font-weight: 500;
    line-height: 38.01px;
    margin-bottom: 50px;
}

.s10-pricing-card {
    width: 100%;
    max-width: 473px;
    background: rgba(217, 217, 217, 0.34);
    border-radius: 46px;
    border: 1px solid #6B444F;
    margin: 0 auto;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.s10-plan-name {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 27.89px;
    font-weight: 500;
    margin-bottom: 20px;
}

/* --- BLOCO DE PREÇO AJUSTADO --- */
.s10-price-wrapper {
    display: flex;
    align-items: flex-start; /* Alinha pelo topo */
    justify-content: center;
    color: #421A25;
    margin-bottom: 25px;
    position: relative;
}

.s10-currency {
    font-size: 27.81px;
    font-weight: 700;
    margin-right: 5px;
    margin-top: 8px; /* Ajuste fino do R$ */
}

.s10-price-number {
    font-size: 80.17px;
    font-weight: 700;
    line-height: 0.8; /* Força o número a ignorar espaços de respiro da fonte */
    display: inline-block;
}

.s10-price-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5px;
    /* PARA SUBIR MAIS: aumente o valor negativo abaixo */
    margin-top: -5px; 
}

.s10-cents {
    font-size: 27.81px;
    font-weight: 700;
    line-height: 1;
}

.s10-period {
    font-size: 17.85px;
    font-weight: 700;
    line-height: 1;
    margin-top: 2px;
}

/* Ícones de Confiança */
.s10-trust-icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;
    width: 100%;
}

.s10-trust-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.s10-trust-item img {
    height: 18px;
    width: auto;
}

.s10-trust-item span {
    font-size: 5.3px;
    font-weight: 700;
    color: #421A25;
    line-height: 1.2;
    text-transform: uppercase;
}

/* Lista de Benefícios */
.s10-features {
    list-style: none;
    text-align: left;
    margin-bottom: 40px;
    width: 100%;
    padding-left: 10px;
}

.s10-features li {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 15.64px;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 8px;
    position: relative;
    padding-left: 15px;
}

.s10-features li::before {
    content: "•";
    position: absolute;
    left: 0;
}

.s10-note-box {
    background: #D9D9D9;
    border-radius: 5.77px;
    padding: 12px 15px;
    margin-bottom: 35px;
    width: 100%;
    max-width: 300px;
}

.s10-note-box p {
    color: #421A25;
    font-size: 13.65px;
    font-style: italic;
    line-height: 1.2;
    margin: 0;
}

.s10-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 272.32px;
    height: 52px;
    background: linear-gradient(90deg, #B28739 0%, #F5D9A8 100%);
    border-radius: 12.32px;
    border: 0.68px solid #FFCD74;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 18.33px;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;
}

.s10-btn-icon {
    width: 11px;
}

/* --- AJUSTES MOBILE --- */
@media (max-width: 768px) {
    .s10-title { font-size: 24px; line-height: 28px; }
    .s10-subtitle { font-size: 18px; line-height: 22px; }
    .s10-pricing-card { max-width: 320px; padding: 40px 20px; border-radius: 20px; }
    .s10-plan-name { font-size: 20px; }
    .s10-price-number { font-size: 60px; }
    .s10-currency { margin-top: 5px; font-size: 18px; }
    .s10-price-details { margin-top: -3px; }
    .s10-cents { font-size: 18px; }
    .s10-period { font-size: 14px; }
    .s10-features li { font-size: 15px; }
    .s10-btn { width: 100%; font-size: 16px; height: 48px; }
}
/* --- SEÇÃO 11: FAQ --- */
.s11-faq {
    background-color: #E2E1DD;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.s11-divider {
    width: 100%;
    height: 4px;
    background-color: #421A25;
    border-radius: 9999px;
    margin-bottom: 60px;
}

.s11-container {
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
    text-align: center;
}

.s11-title {
    color: #421A25;
    font-family: 'Acumin Pro', sans-serif;
    font-size: 53.76px;
    font-weight: 700;
    line-height: 55.91px;
    margin-bottom: 50px;
}

.s11-faq-wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

/* Item do FAQ */
.s11-faq-item {
    width: 100%;
    max-width: 615.29px;
    margin: 0 auto;
    background: white;
    border-radius: 8.91px;
    overflow: hidden;
    transition: all 0.3s ease;
    text-align: left;
}

/* Cabeçalho da Pergunta */
.s11-faq-question {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    list-style: none; /* Remove seta padrão do navegador */
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 22.78px;
    font-weight: 600;
    position: relative;
    background: white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    z-index: 2;
}

/* Seta Customizada */
.s11-faq-icon {
    width: 22.29px;
    transition: transform 0.3s ease;
}

/* Gira a seta quando aberto */
.s11-faq-item[open] .s11-faq-icon {
    transform: rotate(180deg);
}

/* Área da Resposta */
.s11-faq-answer {
    padding: 20px 30px 30px 30px;
    background: white;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 18.24px;
    font-weight: 400;
    line-height: 1.5;
    animation: slideDown 0.3s ease-out;
}

/* Animação suave */
@keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* --- AJUSTES MOBILE (Títulos 24px e Textos Legíveis) --- */
@media (max-width: 768px) {
    .s11-title {
        font-size: 24px;
        line-height: 1.2;
        margin-bottom: 35px;
    }

    .s11-faq-item {
        max-width: 100%;
        border-radius: 5px;
    }

    .s11-faq-question {
        padding: 15px 20px;
        font-size: 16px;
    }

    .s11-faq-icon {
        width: 15px;
    }

    .s11-faq-answer {
        padding: 15px 20px 20px 20px;
        font-size: 14px;
    }

    .s11-faq-wrapper {
        gap: 15px;
    }
}
/* =========================================== */
/* RODAPÉ FINAL                                */
/* =========================================== */

.main-footer {
    width: 100%;
    background-color: #E2E1DD; /* Mesma cor de fundo do FAQ para continuidade */
    padding: 40px 20px 60px;   /* Respiro para não ficar colado no FAQ */
    text-align: center;
}

.footer-text {
    color: black;
    font-family: "Acumin Pro", sans-serif;
    font-weight: 500;
    word-wrap: break-word;
    
    /* Configurações Desktop (conforme seu Figma) */
    font-size: 14.92px;
    line-height: 17.76px;
}

/* --- AJUSTE MOBILE --- */
@media (max-width: 768px) {
    .main-footer {
        padding: 30px 15px 40px;
    }

    .footer-text {
        /* Configurações Mobile (conforme seu Figma) */
        font-size: 6.15px;
        line-height: 7.31px;
    }
}
