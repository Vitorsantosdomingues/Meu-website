const chk = document.getElementById('checkbox-switch')
const secInicio = document.getElementById('inicio')
const linkPaginasInicio = document.getElementById('A-linkinicio')
const linkPaginasSobreMim = document.getElementById('A-linksobremim')
const linkPaginasPortfolio = document.getElementById('A-linkportfolio')
const secAtuacao = document.querySelector('section#atuacao')

// Pegar os Icones de redes sociais e imagens
const logoLinkedin = document.querySelector('div#linkedin')
const logoGithub = document.querySelector('div#github')
const logoBehance = document.querySelector('div#behance')
const logoInstagram = document.querySelector('div#instagram')
const logoCapa = document.querySelector('div#logocapa')
const worktittle = document.getElementById('work-tittle')



chk.addEventListener('change', () => {
        secInicio.classList.toggle('dark')
        secAtuacao.classList.toggle('dark')
        document.body.classList.toggle('dark')
        linkPaginasInicio.classList.toggle('dark')
        linkPaginasSobreMim.classList.toggle('dark')
        linkPaginasPortfolio.classList.toggle('dark')
        worktittle.classList.toggle('dark')

        //Alterar a cor dos icones
        logoLinkedin.classList.toggle('dark')
        logoGithub.classList.toggle('dark')
        logoBehance.classList.toggle('dark')
        logoInstagram.classList.toggle('dark')
        logoCapa.classList.toggle('dark')

})