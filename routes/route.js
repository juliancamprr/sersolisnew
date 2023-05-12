const express = require('express')
const route = express.Router()
const client = require('../discord')

route.get('/', (req, res) => {
    res.render('pages/index');
})

route.get('/services', (req, res) => {
    res.render('pages/services')
})

route.get('/equipe', async (req, res) => {

    usersProfession = {
        "783453665322598430": {
            "profession": "Criação de Servidor",
            "profession2": "Criação de Site",
            "description": "Prazer, o meu nome é Djulian. Estou no Discord desenvolvendo e adquirindo habilidades há mais de 5 anos. Entrei no Discord em fevereiro de 2018. Ajudei várias pessoas ao longo dos anos, tanto com dúvidas sobre configurações como com soluções em comunidades!"
        }, // dj
        "353564076812533771": {
            "profession": "Criação de servidor",
            "description": "Olá, meu nome é Iorras, mas podem me chamar de Rasuya. Sou um gerente de comunidade especializado em Discord e tenho mais de 5 anos de experiência em moderação e gerenciamento de comunidades. Tenho ajudado diversas comunidades a crescerem e se desenvolverem no Discord com soluções eficazes. Atualmente, atuo como administrador do servidor Elixir Lab, principal lugar aonde aplico minhas habilidades de gerenciamento. Além disso, estou sempre evoluindo a Network de servidores Black Lótus, aplicando novas técnicas e estratégias para seu bom funcionamento."
        }, // rasuy
        "630094077529948172": {
            "profession": "Criação de servidor",
            "description": "Bom, meu nome é vapo, sou chefe de moderação da elixir lab e moderador do scar bot, estou no discord a 4 anos, e trabalho configurando servidor a 2 anos, tive vários servidores de sucesso, que chegaram a bater de 1000 a 2000 membros, tenho confiança em meu trabalho é prometo entregar de acordo com o pedido dos clientes, talvez até melhor!"
        }, // vapo
        "924838482034163764": {
            "profession": "Criação de Servidor",
            "description": "Olá, eu sou o Vinz, um moderador e administrador experiente de comunidades na plataforma Discord. Desde 2021, tenho oferecido meus serviços voluntariamente como moderador de servidores em grandes comunidades como o Servidor do Goulart e AnimesK. Além disso, atuo como administrador do Elixir Lab há quase um ano. No meu tempo livre, realizo trabalhos remunerados que envolvem o desenvolvimento de servidores, análise de vulnerabilidades e outras atividades relacionadas. É um prazer conhecê-lo!"
        }, // vinz
        "717766639260532826": {
            "profession": "Programador",
            "description": "Olá me chamo ADG, sou moderador de grandes comunidades do discord e desenvolvedor verificado da plataforma desde 2020, você pode consultar alguns projetos em biografia, André Lucas & ADG Development"
        }, // ADG
        "993471863294525450": {
            "profession": "Designer",
            "profession2": "Criação de servidor",
            "description": "Bom, meu nome é Nekochi, sou GFX Designer. Estou nesta área há mais de 2 anos fazendo banners para diversos servidores. Sou muito habilidosa no que faço e valorizo muito quem faz pedidos comigo."
        }, // Neko
        "1059674502876897320": {
            "profession": "Criação de servidor",
            "description": "Olá! Sou Alysson Rodrigues, desenvolvedor de servidores e configurador de bots para Discord. Com 4 anos de experiência, já trabalhei em diversos projetos, criando soluções personalizadas para clientes de diferentes áreas. Com meu profissionalismo, garantirei que seu servidor esteja funcionando da melhor forma possível. Vamos alcançar seus objetivos no Discord juntos!"
        }, // Alysson
        "771885466415923260": {
            "profession": "Criação de servidor",
            "description": "Me chame de Bell, é um prazer me apresentar pra você! Nessa equipe sou responsável por desenvolver servidores e aqui está um pouco sobre mim no Discord: Desempenho no discord a mais de 2 anos, experiência e profissionalismo é o que procuro sendo administrador, moderador ou dono de servidores. Atualmente me comprometo a cuidar do meu servidor Wonderful, moderar o servidor Elixir Lab e administrar a Black Lótus Association"
        }, // Bell
        "434919702620274690": {
            "profession": "Programador",
            "description": "Ei, Bruno Rodds aqui! Tenho dedicado os últimos dois anos ao desenvolvimento de Bots personalizados em Python para Discord e estou pronto para ajudar a tornar o seu servidor ainda mais interessante. Se você procura ferramentas administrativas ou mini-games interativos para a sua comunidade, entre em contato comigo!"
        }, //Bruno Rodds
    }

    const users = [];
    for (const userId in usersProfession) {
        const user = await client.users.fetch(userId);
        
        users.push({
            username: `${user.username}#${user.discriminator}`,
            avatar: user.avatarURL(),
            profession: usersProfession[userId].profession,
            description: usersProfession[userId].description
        });
    }
  
    res.render('pages/equipe', { users });

})

module.exports = route