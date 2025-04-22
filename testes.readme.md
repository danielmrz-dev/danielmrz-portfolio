1. Teste de Comportamento de Linguagem
Objetivo: Garantir que a troca de idioma funcione corretamente e que o serviço de traduções esteja sendo acionado de maneira adequada.

O que testar:

- Verificar se, ao clicar nos botões de idioma (Português, Espanhol, Inglês), o idioma muda corretamente. ✅
- Testar se a função changeLanguage() no serviço é chamada e se o idioma exibido é atualizado no componente. ✅
- Validar se o BehaviorSubject em TranslationsService emite os valores corretos. 
- Certificar-se de que a mudança de idioma provoca a atualização visual necessária, se aplicável (isso pode ser um teste de integração).

2. Teste de Links de Redes Sociais
Objetivo: Certificar que os links para as redes sociais estão sendo exibidos corretamente.

O que testar:

Testar se os links de redes sociais estão sendo renderizados conforme esperado.

Verificar se a URL de cada link é correta, se os ícones estão sendo renderizados corretamente e se o atributo aria-label é atribuído corretamente.

Testar se os links estão funcionando corretamente, incluindo a navegação ao clicar nos ícones.

3. Teste de Comportamento Responsivo
Objetivo: Verificar a renderização e a interação do componente em diferentes dispositivos.

O que testar:

Verificar se os elementos como o menu de idiomas e os links de redes sociais se ajustam de acordo com diferentes tamanhos de tela (responsividade).

Validar se a estrutura do componente se mantém coerente e acessível, sem sobrecarga ou problemas de layout em dispositivos móveis.

4. Teste de Visibilidade do Menu de Idiomas
Objetivo: Garantir que o menu de idiomas (mat-menu) seja exibido apenas no caso adequado.

O que testar:

Verificar se o botão para abrir o menu de idiomas aparece apenas quando o isFooter for true.

Verificar se o conteúdo dentro do menu é exibido corretamente, com os idiomas configurados corretamente.

5. Teste de Acessibilidade
Objetivo: Garantir que o componente esteja acessível.

O que testar:

Testar os atributos aria-label nos botões de idiomas e links, garantindo que sejam descritos corretamente.

Verificar se os ícones são acessíveis e possuem texto alternativo (alt).

Validar a navegação com teclado (por exemplo, para verificar se o menu de idiomas pode ser aberto e fechado usando o teclado).

6. Teste de Inicialização
Objetivo: Garantir que o componente inicialize corretamente e faça o que é esperado com base no tipo de tag (app-header ou app-footer).

O que testar:

Verificar se as classes is-header e is-footer estão sendo atribuídas corretamente ao componente.

Validar a lógica de inicialização do componente baseada na tag do elemento (app-header ou app-footer).

