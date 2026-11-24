
fetch("datos.json")
    .then(respuesta => respuesta.json())
    .then(piezas => {

        let contenido = "";

        piezas.forEach(pieza => {

            contenido += `
                <div class="col-12 col-md-4">

                    <article class="border border-dark p-3 h-100 d-flex flex-column tarjeta-pieza">

                        <img src="${pieza.imagen}"
                             alt="${pieza.nombre}"
                             class="img-fluid mb-3">

                        <h3 class="h5">${pieza.nombre}</h3>

                        <p>${pieza.autor}</p>
                        <p>${pieza.año}</p>

                    </article>

                </div>
            `;

        });

        document.getElementById("contenedor-piezas").innerHTML = contenido;

    });
