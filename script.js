// script.js - Funcionalidad para el contrato
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del contrato
    const elementosContrato = {
        nombreTrabajador: document.getElementById('nombreTrabajador'),
        fechaNacimiento: document.getElementById('fechaNacimiento'),
        curpTrabajador: document.getElementById('curpTrabajador'),
        direccionTrabajador: document.getElementById('direccionTrabajador'),
        correoTrabajador: document.getElementById('correoTrabajador'),
        rfcTrabajador: document.getElementById('rfcTrabajador'),
        salarioTrabajador: document.getElementById('salarioTrabajador'),
        beneficiario: document.getElementById('beneficiario'),
        parentescoBenef: document.getElementById('parentescoBenef'),
        domicilioBenef: document.getElementById('domicilioBenef'),
        telefonoBenef: document.getElementById('telefonoBenef'),
        diaFirma: document.getElementById('diaFirma'),
        mesFirma: document.getElementById('mesFirma'),
        anoFirma: document.getElementById('anoFirma'),
        testigoNombre: document.getElementById('testigoNombre'),
        firmaNombreTrabajador: document.getElementById('firmaNombreTrabajador')
    };
    
    // Inputs del formulario
    const inputsFormulario = {
        nombre: document.getElementById('inputNombre'),
        fechaNacimiento: document.getElementById('inputFechaNacimiento'),
        curp: document.getElementById('inputCURP'),
        direccion: document.getElementById('inputDireccion'),
        correo: document.getElementById('inputCorreo'),
        rfc: document.getElementById('inputRFC'),
        salario: document.getElementById('inputSalario'),
        beneficiario: document.getElementById('inputBeneficiario'),
        parentesco: document.getElementById('inputParentesco'),
        fechaFirma: document.getElementById('inputFechaFirma')
    };
    
    // Botones
    const btnRellenar = document.getElementById('btnRellenar');
    const btnImprimir = document.getElementById('btnImprimir');
    const btnLimpiar = document.getElementById('btnLimpiar');
    
    // Función para rellenar el contrato
    function rellenarContrato() {
        // Actualizar elementos del contrato
        elementosContrato.nombreTrabajador.textContent = inputsFormulario.nombre.value || '[NOMBRE COMPLETO]';
        elementosContrato.fechaNacimiento.textContent = inputsFormulario.fechaNacimiento.value || '[FECHA NACIMIENTO]';
        elementosContrato.curpTrabajador.textContent = inputsFormulario.curp.value || '[CURP]';
        elementosContrato.direccionTrabajador.textContent = inputsFormulario.direccion.value || '[DIRECCIÓN]';
        elementosContrato.correoTrabajador.textContent = inputsFormulario.correo.value || '[CORREO]';
        elementosContrato.rfcTrabajador.textContent = inputsFormulario.rfc.value || '[RFC]';
        elementosContrato.salarioTrabajador.textContent = inputsFormulario.salario.value || '[SALARIO]';
        elementosContrato.beneficiario.textContent = inputsFormulario.beneficiario.value || '[BENEFICIARIO]';
        elementosContrato.parentescoBenef.textContent = inputsFormulario.parentesco.value || '[PARENTESCO]';
        elementosContrato.firmaNombreTrabajador.textContent = inputsFormulario.nombre.value || '[NOMBRE COMPLETO DEL TRABAJADOR]';
        elementosContrato.testigoNombre.textContent = inputsFormulario.nombre.value || '[NOMBRE]';
        
        // Para la fecha de firma
        const fechaFirma = inputsFormulario.fechaFirma.value;
        if (fechaFirma) {
            const partes = fechaFirma.split(' de ');
            if (partes.length === 3) {
                elementosContrato.diaFirma.textContent = partes[0];
                elementosContrato.mesFirma.textContent = partes[1];
                elementosContrato.anoFirma.textContent = partes[2];
            } else {
                const hoy = new Date();
                elementosContrato.diaFirma.textContent = hoy.getDate();
                elementosContrato.mesFirma.textContent = obtenerNombreMes(hoy.getMonth());
                elementosContrato.anoFirma.textContent = hoy.getFullYear();
            }
        } else {
            const hoy = new Date();
            elementosContrato.diaFirma.textContent = hoy.getDate();
            elementosContrato.mesFirma.textContent = obtenerNombreMes(hoy.getMonth());
            elementosContrato.anoFirma.textContent = hoy.getFullYear();
            
            inputsFormulario.fechaFirma.value = `${hoy.getDate()} de ${obtenerNombreMes(hoy.getMonth())} de ${hoy.getFullYear()}`;
        }
        
        elementosContrato.domicilioBenef.textContent = elementosContrato.direccionTrabajador.textContent;
        elementosContrato.telefonoBenef.textContent = '[TELÉFONO]';
    }
    
    // Función para obtener nombre del mes en español
    function obtenerNombreMes(numeroMes) {
        const meses = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
        ];
        return meses[numeroMes];
    }
    
    // Función para limpiar el formulario
    function limpiarFormulario() {
        for (const key in inputsFormulario) {
            if (inputsFormulario[key]) {
                inputsFormulario[key].value = '';
            }
        }
        
        elementosContrato.nombreTrabajador.textContent = '[NOMBRE COMPLETO]';
        elementosContrato.fechaNacimiento.textContent = '[FECHA NACIMIENTO]';
        elementosContrato.curpTrabajador.textContent = '[CURP]';
        elementosContrato.direccionTrabajador.textContent = '[DIRECCIÓN]';
        elementosContrato.correoTrabajador.textContent = '[CORREO]';
        elementosContrato.rfcTrabajador.textContent = '[RFC]';
        elementosContrato.salarioTrabajador.textContent = '[SALARIO]';
        elementosContrato.beneficiario.textContent = '[BENEFICIARIO]';
        elementosContrato.parentescoBenef.textContent = '[PARENTESCO]';
        elementosContrato.domicilioBenef.textContent = '[DOMICILIO]';
        elementosContrato.telefonoBenef.textContent = '[TELÉFONO]';
        elementosContrato.diaFirma.textContent = '[DÍA]';
        elementosContrato.mesFirma.textContent = '[MES]';
        elementosContrato.anoFirma.textContent = '[AÑO]';
        elementosContrato.testigoNombre.textContent = '[NOMBRE]';
        elementosContrato.firmaNombreTrabajador.textContent = '[NOMBRE COMPLETO DEL TRABAJADOR]';
    }
    
    // Event listeners
    if (btnRellenar) btnRellenar.addEventListener('click', rellenarContrato);
    if (btnImprimir) btnImprimir.addEventListener('click', function() { window.print(); });
    if (btnLimpiar) btnLimpiar.addEventListener('click', limpiarFormulario);
    
    // Rellenar automáticamente al cambiar cualquier input
    for (const key in inputsFormulario) {
        if (inputsFormulario[key]) {
            inputsFormulario[key].addEventListener('input', rellenarContrato);
        }
    }
    
    // Inicializar con datos de ejemplo
    function rellenarEjemplo() {
        const datosEjemplo = {
            nombre: 'MARÍA FERNANDA LÓPEZ GARCÍA',
            fechaNacimiento: '15/08/1995',
            curp: 'LOGM950815MZSRRR09',
            direccion: 'Av. Hidalgo #123, Col. Centro, Guadalupe, Zac., CP 98600',
            correo: 'maria.lopez@email.com',
            rfc: 'LOGM950815ABC',
            salario: '350.00',
            beneficiario: 'JUAN CARLOS LÓPEZ SÁNCHEZ',
            parentesco: 'PADRE',
            fechaFirma: '25 de marzo de 2024'
        };
        
        for (const key in datosEjemplo) {
            if (inputsFormulario[key]) {
                inputsFormulario[key].value = datosEjemplo[key];
            }
        }
        
        rellenarContrato();
    }
    
    // Inicializar
    rellenarEjemplo();
});
