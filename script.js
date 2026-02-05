// ===========================================
// CONFIGURAÇÃO SUPABASE - VERSÃO FUNCIONAL
// ===========================================

console.log('🚀 Iniciando script...');

// CREDENCIAIS
const SUPABASE_URL = 'https://ellisuzzlwgpmpdjnkdl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_pjsMKzTKT9v7n7yZwvimHg_Rrcjfjuv';

// CRIAR CLIENTE SUPABASE
let supabase;

try {
    // Verificar se a biblioteca está carregada
    if (window.supabase && window.supabase.createClient) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log('✅ Cliente Supabase criado!');
        
        // Tornar global para testes
        window.meuSupabaseCliente = supabase;
        
        // Testar conexão inicial
        setTimeout(async () => {
            try {
                const { error } = await supabase
                    .from('contatos')
                    .select('count')
                    .limit(1);
                
                if (error) {
                    console.warn('⚠️ Aviso na conexão:', error.message);
                } else {
                    console.log('✅ Conexão estabelecida!');
                }
            } catch (e) {
                console.warn('⚠️ Erro no teste inicial:', e.message);
            }
        }, 1000);
    } else {
        console.error('❌ Biblioteca Supabase não encontrada!');
    }
} catch (error) {
    console.error('❌ Erro ao criar cliente:', error);
}

// ===========================================
// MÁSCARA PARA WHATSAPP
// ===========================================

function mascaraWhatsApp(input) {
    let valor = input.value.replace(/\D/g, '');
    
    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }
    
    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (valor.length > 0) {
        valor = valor.replace(/^(\d{0,2})$/, '($1');
    }
    
    input.value = valor;
}

// ===========================================
// CONFIGURAR FORMULÁRIO QUANDO A PÁGINA CARREGAR
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Content Loaded - Configurando formulário...');
    
    // Elementos do formulário
    const btnEnviar = document.getElementById('btnEnviar');
    const inputWhatsapp = document.getElementById('whatsapp');
    const inputNome = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    
    // Verificar se os elementos existem
    if (!btnEnviar) {
        console.error('❌ Botão btnEnviar não encontrado!');
        return;
    }
    
    console.log('✅ Elementos encontrados:', {
        btnEnviar: !!btnEnviar,
        inputWhatsapp: !!inputWhatsapp,
        inputNome: !!inputNome,
        inputEmail: !!inputEmail
    });
    
    // 1. Aplicar máscara ao WhatsApp
    if (inputWhatsapp) {
        inputWhatsapp.addEventListener('input', function(e) {
            mascaraWhatsApp(e.target);
        });
        console.log('✅ Máscara do WhatsApp configurada');
    }
    
    // 2. Configurar clique do botão
    btnEnviar.addEventListener('click', enviarFormulario);
    console.log('✅ Evento de clique configurado no botão');
    
    // 3. Configurar envio ao pressionar Enter nos campos
    [inputNome, inputEmail, inputWhatsapp].forEach(input => {
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    enviarFormulario();
                }
            });
        }
    });
    
    console.log('✅ Formulário totalmente configurado!');
});

// ===========================================
// FUNÇÃO PRINCIPAL PARA ENVIAR O FORMULÁRIO
// ===========================================

async function enviarFormulario() {
    console.log('🎯 Função enviarFormulario() chamada');
    
    // Referências aos elementos
    const btnEnviar = document.getElementById('btnEnviar');
    const inputNome = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputWhatsapp = document.getElementById('whatsapp');
    
    // Obter valores
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const whatsapp = inputWhatsapp.value;
    
    console.log('📝 Dados coletados:', { nome, email, whatsapp });
    
    // VALIDAÇÕES
    if (!nome || nome.length < 2) {
        alert('Por favor, digite seu nome completo.');
        inputNome.focus();
        return;
    }
    
    if (!email || !email.includes('@') || !email.includes('.')) {
        alert('Por favor, digite um e-mail válido.');
        inputEmail.focus();
        return;
    }
    
    const whatsappNumeros = whatsapp.replace(/\D/g, '');
    if (whatsappNumeros.length < 10) {
        alert('Por favor, digite um WhatsApp válido com DDD.');
        inputWhatsapp.focus();
        return;
    }
    
    // Verificar se o Supabase está disponível
    if (!supabase) {
        console.error('❌ Supabase não configurado!');
        alert('Erro de configuração. Recarregue a página.');
        return;
    }
    
    // Salvar estado original do botão
    const textoOriginal = btnEnviar.innerHTML;
    const corOriginal = btnEnviar.style.background;
    
    // Mostrar "ENVIANDO..."
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = 'ENVIANDO... <img src="images/seta.svg" alt="Seta" class="btn-icon">';
    btnEnviar.style.opacity = '0.7';
    
    try {
        // Preparar dados
        const dados = {
            nome: nome,
            email: email.toLowerCase(),
            whatsapp: '+55' + whatsappNumeros,
            origem: 'landing_page_dra_suellen',
            data_cadastro: new Date().toISOString()
        };
        
        console.log('📤 Enviando para Supabase:', dados);
        
        // ENVIAR PARA SUPABASE
        const { data, error } = await supabase
            .from('contatos')
            .insert([dados])
            .select();
        
        if (error) {
            console.error('❌ Erro do Supabase:', error);
            
            // Se for erro de email duplicado, mostrar sucesso mesmo assim
            if (error.code === '23505') {
                console.log('⚠️ Email já cadastrado - mostrando sucesso');
                mostrarSucessoVisual();
                limparFormulario();
            } else {
                // Outros erros
                alert('Erro ao enviar: ' + error.message);
                resetarBotao(btnEnviar, textoOriginal, corOriginal);
            }
            return;
        }
        
        // SUCESSO!
        console.log('✅ Dados salvos com sucesso!', data);
        mostrarSucessoVisual();
        limparFormulario();
        
    } catch (error) {
        console.error('❌ Erro geral:', error);
        alert('Erro de conexão. Tente novamente.');
        resetarBotao(btnEnviar, textoOriginal, corOriginal);
    }
}

// ===========================================
// FUNÇÕES AUXILIARES
// ===========================================

function mostrarSucessoVisual() {
    console.log('🎨 Mostrando sucesso visual...');
    
    const btnEnviar = document.getElementById('btnEnviar');
    
    // Mudar botão para VERDE com "ENVIADO COM SUCESSO!"
    btnEnviar.innerHTML = 'ENVIADO COM SUCESSO! <img src="images/seta.svg" alt="Seta" class="btn-icon">';
    btnEnviar.style.background = '#4CAF50';
    btnEnviar.style.backgroundImage = 'none';
    btnEnviar.style.borderColor = '#45a049';
    btnEnviar.style.color = 'white';
    btnEnviar.style.opacity = '1';
    btnEnviar.classList.add('sucesso');
    
    // Criar mensagem flutuante
    const mensagem = document.createElement('div');
    mensagem.id = 'mensagem-sucesso';
    mensagem.textContent = '🎉 Cadastro realizado com sucesso!';
    mensagem.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 9999;
        font-family: "Acumin Pro", sans-serif;
        font-weight: 600;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(mensagem);
    
    // Adicionar animação CSS se não existir
    if (!document.querySelector('#animacoes-css')) {
        const style = document.createElement('style');
        style.id = 'animacoes-css';
        style.textContent = `
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
            
            .sucesso {
                background: #4CAF50 !important;
                background-image: none !important;
                border-color: #45a049 !important;
                color: white !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remover mensagem após 4 segundos
    setTimeout(() => {
        if (mensagem.parentNode) {
            mensagem.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (mensagem.parentNode) mensagem.remove();
            }, 300);
        }
        
        // Restaurar botão após 5 segundos
        setTimeout(() => {
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = 'QUERO PARTICIPAR <img src="images/seta.svg" alt="Seta" class="btn-icon">';
            btnEnviar.style.background = '';
            btnEnviar.style.backgroundImage = '';
            btnEnviar.style.borderColor = '';
            btnEnviar.style.color = '';
            btnEnviar.classList.remove('sucesso');
        }, 5000);
    }, 4000);
}

function resetarBotao(botao, textoOriginal, corOriginal) {
    botao.disabled = false;
    botao.innerHTML = textoOriginal;
    botao.style.background = corOriginal;
    botao.style.opacity = '1';
    botao.classList.remove('sucesso');
}

function limparFormulario() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('whatsapp').value = '';
}

// ===========================================
// FUNÇÕES PARA TESTE NO CONSOLE
// ===========================================

// Testar Supabase: testeConexao()
window.testeConexao = async function() {
    console.log('🧪 TESTANDO CONEXÃO...');
    
    if (!supabase) {
        console.error('❌ Supabase não configurado!');
        return false;
    }
    
    try {
        const dados = {
            nome: 'Teste Console ' + Date.now(),
            email: 'teste' + Date.now() + '@teste.com',
            whatsapp: '+5511999999999',
            origem: 'teste_console'
        };
        
        const { data, error } = await supabase
            .from('contatos')
            .insert([dados])
            .select();
        
        if (error) {
            console.error('❌ Erro:', error);
            return false;
        }
        
        console.log('✅ Sucesso! ID:', data[0]?.id);
        mostrarSucessoVisual();
        return true;
    } catch (error) {
        console.error('❌ Erro catch:', error);
        return false;
    }
};

// Verificar status: statusSistema()
window.statusSistema = function() {
    console.log('📊 STATUS DO SISTEMA:');
    console.log('- Supabase configurado?', !!supabase);
    console.log('- Cliente global?', window.meuSupabaseCliente);
    console.log('- Botão encontrado?', !!document.getElementById('btnEnviar'));
    console.log('- Elementos do formulário:');
    console.log('  • Nome:', !!document.getElementById('name'));
    console.log('  • Email:', !!document.getElementById('email'));
    console.log('  • WhatsApp:', !!document.getElementById('whatsapp'));
};