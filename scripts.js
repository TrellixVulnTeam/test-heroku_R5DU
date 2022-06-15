


$(document).ready(() => {
    //projects.list();
    getProjects();

});

// AJAX

// api = 'http://127.0.0.1:3000'

// var projects = {

//     list() {
//         $.ajax({
//             url: api + "/projeto",
//             type: 'GET',
//             success: data => {
// $('#tabela').html("");
//  var tx = '';
//  tx += `<table>
//  <tr>
//      <th>Cliente</th>
//      <th>Proposta</th>
//      <th>Carga horária</th>
//  </tr>`;
// data.map(element => {
//     tx += `<tr>
//     <td>` + element.cliente + `</td>
//     <td>` + element.proposta + `</td>
//     <td>` + element.carga + `</td>
// </tr>`
// });
// $('#tabela').append(tx);
//             }
//         })
//     }
// }

// var project = {

//     insert() {
//    var cliente = prompt('Digite o cliente');
//    var proposta = prompt('Digite a proposta');
//    var carga = prompt('Digite a carga horária');
//        if (cliente) {
//         if (cliente.trim() != '') {
//             $.ajax({
//                 type: 'POST',
//                 url: api + '/projeto',
//                 data: {cliente: cliente, 
//                        proposta: proposta, 
//                        carga: carga},
//                 success: data =>{
//                     projects.list(data);
//                 } 
//                 }).fail(function (msg) {
//                     //console.log('FAIL');
//                 }).always(function (msg) {
//                     //console.log('ALWAYS');
//                 }); 
//         }
//     }
// },

//     delete(data) {
//         var cliente = prompt('Digite o cliente')
//         if (confirm('Confirma a exclusão?')) {
//             $.ajax({
//                 type: 'DELETE',
//                 url: api + '/projeto/:id',
//                 data: {cliente: cliente, proposta: proposta, carga: carga},
//             }).done(function () {
//                 projects.list(data);
//             }).fail(function (msg) {
//                 //console.log('FAIL');
//             }).always(function (msg) {
//                 //console.log('ALWAYS');
//             });
//         }
//     }}

// AXIOS

const url = 'http://127.0.0.1:3000'

const getProjects = () => {
    axios.get(url + "/projeto")
        .then(response => {
            console.log(response)
            $('#tabela').html("");
            var tx = '';
            tx += `<table>
                 <tr>
                     <th>Cliente</th>
                     <th>Proposta</th>
                     <th>Carga horária</th>
                 </tr>`;
            response.data.map(element => {
                tx += `<tr>
                    <td>` + element.cliente + `</td>
                    <td>` + element.proposta + `</td>
                    <td>` + element.carga + `</td>
                    <td>
          <button class = "btn btn-danger" onclick="deleteProject(${
            element.modulo
          })"><Deletar</button>
          </td>
                </tr>`
            });
            $('#tabela').append(tx);

        })
        .catch(error => {
            console.log(error)
        })
}

const insertProject = () => {
    var cliente = prompt('Digite o cliente');
    var proposta = prompt('Digite a proposta');
    var carga = prompt('Digite a carga horária');
    axios
        .post(url + "/projeto", {
            cliente: cliente,
            proposta: proposta,
            carga: carga
        }).then(res => {
            getProjects()
        })
        .catch(err => console.error(err))
};

const deleteProject = (id) => {
    if (confirm('Confirma a exclusão?')) {
    
    axios
      .delete(url + "/projeto/" + id)
      .then((res) => {
        console.log(res);
        getProjects();
      })
      .catch((e) => console.error(e));
    } 
    };