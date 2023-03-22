<template>
  <main>
    <h1>Sobre o Hotel</h1>
    <p>
      <img :src="require('../assets/images/areas01.jpg')" alt="Nosso Hotel" width="50%" class="imgs" />
      O Hotel já está em funcionando há quase duas décadas, no inicio de 2015
      houve a troca de comando da direção, onde novas estruturas e readequações
      foram realizadas para melhor atender o hospede que procura um local
      aconchegante e limpo para passar a noite.
      <br />
      <br />A localização é previlegiada e o atendimento é diferenciado,
      contamos com profissionais experientes e capazes de entender a necessidade
      de quem está passando pela cidade a trabalho ou lazer.
    </p>

    <div class="localizacao">
      <h1>Localização</h1>
      <p>
        Nós residimos em São paulo no endereço: Rua Marabu, 1229 | Centro | SP
      </p>
    </div>
    <div class="servicos">
      <h1>Nossos Serviços</h1>
      <ul>
        <li>
          <img width="100%" :src="require('../assets/images/comida.jpg')" alt="Cozinha especializada" class="loc" />
          <h3>Cozinha especializada</h3>
          <p>24 horas</p>
        </li>
        <li>
          <img width="100%" :src="require('../assets/images/academia.jpg')" alt="Academia" class="loc" />
          <h3>Academia</h3>
          <p>24 horas</p>
        </li>
        <li>
          <img width="100%" :src="require('../assets/images/piscina01.jpg')" alt="Piscina" class="loc" />
          <h3>Piscina de frente ao mar</h3>
          <p>24 horas</p>
        </li>
      </ul>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minus
      deserunt aliquid quia, asperiores excepturi natus fugit aut vitae omnis,
      culpa consequatur corrupti qui odio, voluptatum commodi. Neque, fugit
      deserunt?
    </p>

    <article>
      <h1>Valores</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minus
        deserunt aliquid quia, asperiores excepturi natus fugit aut vitae omnis,
        culpa consequatur corrupti qui odio, voluptatum commodi. Neque, fugit
        deserunt?
      </p>
    </article>
  </main>
</template>

<script>
export default { name: "SobreView" };
</script>

<style lang="scss" scoped>
h1 {
  margin: 10px 100px 20px;
  text-align: center;
}

h3 {
  margin: 10px 100px 20px;
  color: #b79829;
}

.imgs {
  width: 300px;
  border-radius: 300%;
  box-shadow: 1px 1px 4px;
  float: left;
  margin-right: 20px;
}

.loc {
  width: 300px;
  border-radius: 300%;
  box-shadow: 1px 1px 4px;
  margin-right: 20px;
}

img,
p {
  display: inline-block;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
}
.localizacao {
  text-align: center;
}

p {
  margin: 10px 100px 20px;
  line-height: 1.4rem;
  text-align: justify;
  text-indent: 1.3rem;
  letter-spacing: 0.03rem;
  word-spacing: 0.3rem;
}
</style>
