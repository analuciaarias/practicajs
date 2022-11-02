dineroCofla= prompt('Cuanto dinero tienes Cofla?');
dineroCofla= parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1 ){
    alert(`si tienes ${dineroCofla} entonces te alcanza para agua`);
    alert('y te sobran' + (dineroCofla - 0.6));
} else if(dineroCofla >=1 && dineroCofla < 1.6){
    alert(`si tienes ${dineroCofla} entonces te alcanza para un helado de crema`)
    alert('y te sobran' + (dineroCofla - 1));
    }  else if(dineroCofla >=1.6 && dineroCofla < 2.9){
        alert(`si tienes ${dineroCofla} entonces te alcanza para un helado marca Helix`);
        alert('y te sobran' + (dineroCofla - 1.6));
    }else if(dineroCofla >=2.9){
        alert(`si tienes ${dineroCofla} entonces te alcanza para un helado marca Helardo`);
        alert('y te sobran' + (dineroCofla - 2.9));
    } else {
        alert('no puedes comprar ningun helado')
    }

    dineroRob= prompt('Cunato dinero tienes Roberto?');
    if(dineroRob >=20 && dineroRob <40){
        alert(`si tienes ${dineroRob} puedes comprar ojotas`)
    } else if (dineroRob >=40 && dineroRob <70){
        alert(`si tienes ${dineroRob} puedes comprar sandalias`)
    } else if (dineroRob >=70 && dineroRob <100){
        alert(`si tienes ${dineroRob} puedes comprar zapatillas`)
    } else if (dineroRob >=100){
        alert(`si tienes ${dineroRob} puedes comprar zapatos`)
    } else {
        alert('no puedes comprar ningun producto')
    }