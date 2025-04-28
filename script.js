/**
 * Script principal para o site Seguranca chilengue
 * Autor: Seguranca Chilengue
 * Data: Abril 2025
 */

// Esperar que o DOM seja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    initMobileMenu();
    
    // Slider de Depoimentos
    initTestimonialSlider();
    
    // FAQ Accordion
    initFaqAccordion();
    
    // Validação de Formulário
    initFormValidation();
    
    // Animações de Scroll
    initScrollAnimations();
});

/**
 * Inicializa o menu mobile
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            
            // Alterna o ícone do menu
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fechar menu ao clicar em um link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

/**
 * Inicializa o slider de depoimentos
 */
function initTestimonialSlider() {
    const slider = document.querySelector('.depoimentos-slider');
    const prevBtn = document.querySelector('.controle.prev');
    const nextBtn = document.querySelector('.controle.next');
    
    if (slider && prevBtn && nextBtn) {
        let slideIndex = 0;
        const slides = slider.querySelectorAll('.depoimento');
        const totalSlides = slides.length;
        
        if (totalSlides === 0) return;
        
        // Configurar slides inicialmente
        slides.forEach((slide, index) => {
            if (index !== 0) {
                slide.style.display = 'none';
            }
        });
        
        // Função para mostrar slide específico
        function showSlide(index) {
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            slides[index].style.display = 'block';
            
            // Adicionar animação
            slides[index].style.opacity = '0';
            setTimeout(() => {
                slides[index].style.opacity = '1';
                slides[index].style.transition = 'opacity 0.5s ease';
            }, 50);
        }
        
        // Botão próximo
        nextBtn.addEventListener('click', function() {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlide(slideIndex);
        });
        
        // Botão anterior
        prevBtn.addEventListener('click', function() {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            showSlide(slideIndex);
        });
        
        // Auto-play do slider
        setInterval(() => {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlide(slideIndex);
        }, 5000);
    }
}

/**
 * Inicializa o accordion de FAQ
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-toggle i');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                // Fechar outros itens
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.display = 'none';
                        const otherIcon = otherItem.querySelector('.faq-toggle i');
                        if (otherIcon) {
                            otherIcon.className = 'fas fa-plus';
                        }
                    }
                });
                
                // Alternar estado atual
                item.classList.toggle('active');
                
                if (item.classList.contains('active')) {
                    answer.style.display = 'block';
                    if (icon) {
                        icon.className = 'fas fa-minus';
                    }
                } else {
                    answer.style.display = 'none';
                    if (icon) {
                        icon.className = 'fas fa-plus';
                    }
                }
            });
        }
    });
}

/**
 * Inicializa a validação de formulários
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const formElements = contactForm.elements;
            
            // Validar campos obrigatórios
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                
                if (element.hasAttribute('required') && element.value.trim() === '') {
                    isValid = false;
                    element.classList.add('error');
                    
                    // Adicionar mensagem de erro se não existir
                    let errorMsg = element.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'Este campo é obrigatório';
                        errorMsg.style.color = '#e74c3c';
                        errorMsg.style.fontSize = '0.8rem';
                        errorMsg.style.marginTop = '5px';
                        element.parentNode.insertBefore(errorMsg, element.nextSibling);
                    }
                } else if (element.hasAttribute('required')) {
                    element.classList.remove('error');
                    
                    // Remover mensagem de erro se existir
                    const errorMsg = element.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                    
                    // Validação específica para email
                    if (element.type === 'email' && !validateEmail(element.value)) {
                        isValid = false;
                        element.classList.add('error');
                        
                        let errorMsg = element.nextElementSibling;
                        if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                            errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            errorMsg.textContent = 'Por favor, insira um email válido';
                            errorMsg.style.color = '#e74c3c';
                            errorMsg.style.fontSize = '0.8rem';
                            errorMsg.style.marginTop = '5px';
                            element.parentNode.insertBefore(errorMsg, element.nextSibling);
                        }
                    }
                    
                    // Validação específica para telefone
                    if (element.type === 'tel' && !validatePhone(element.value)) {
                        isValid = false;
                        element.classList.add('error');
                        
                        let errorMsg = element.nextElementSibling;
                        if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                            errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            errorMsg.textContent = 'Por favor, insira um número de telefone válido';
                            errorMsg.style.color = '#e74c3c';
                            errorMsg.style.fontSize = '0.8rem';
                            errorMsg.style.marginTop = '5px';
                            element.parentNode.insertBefore(errorMsg, element.nextSibling);
                        }
                    }
                }
            }
            
            // Se o formulário for válido, mostrar mensagem de sucesso
            if (isValid) {
                // Esconder formulário
                contactForm.style.display = 'none';
                
                // Mostrar mensagem de sucesso
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <div style="text-align: center; padding: 30px;">
                        <i class="fas fa-check-circle" style="font-size: 50px; color: #27ae60; margin-bottom: 20px;"></i>
                        <h3>Mensagem Enviada com Sucesso!</h3>
                        <p>Obrigado pelo seu contacto. Responderemos o mais breve possível.</p>
                        <button id="newMessageBtn" class="btn-primary" style="margin-top: 20px;">Enviar Nova Mensagem</button>
                    </div>
                `;
                
                contactForm.parentNode.insertBefore(successMessage, contactForm);
                
                // Botão para enviar nova mensagem
                document.getElementById('newMessageBtn').addEventListener('click', function() {
                    successMessage.remove();
                    contactForm.reset();
                    contactForm.style.display = 'block';
                });
            }
        });
        
        // Remover classe de erro ao digitar
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
                
                // Remover mensagem de erro se existir
                const errorMsg = this.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            });
        });
    }
}

/**
 * Validar formato de email
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Validar formato de telefone
 */
function validatePhone(phone) {
    // Aceita formatos como: +258 85 843 4078, 84 811 5887, 844090810, etc.
    const re = /^(\+\d{1,3}\s?)?(\d{2,3}[\s-]?){2}\d{4}$/;
    return re.test(String(phone));
}

/**
 * Inicializa animações de scroll
 */
function initScrollAnimations() {
    // Animação para elementos que devem aparecer ao rolar a página
    const animatedElements = document.querySelectorAll('.servico-card, .mvv-card, .membro-card, .certificacao-item, .contacto-card, .blog-post');
    
    if (animatedElements.length > 0) {
        // Adicionar classe inicial para esconder elementos
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Função para verificar se elemento está visível na viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
            );
        }
        
        // Função para animar elementos visíveis
        function animateOnScroll() {
            animatedElements.forEach(element => {
                if (isElementInViewport(element)) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Executar na carga inicial e no scroll
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
    }
    
    // Botão de voltar ao topo
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.width = '50px';
    backToTopBtn.style.height = '50px';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.backgroundColor = '#e74c3c';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.alignItems = 'center';
    backToTopBtn.style.justifyContent = 'center';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    backToTopBtn.style.zIndex = '999';
    
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}
