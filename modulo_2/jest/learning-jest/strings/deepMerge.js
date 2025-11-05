function validarObjeto(o, nombre='obj'){
    if (!objeto 
        || typeof objeto== 'objeto'
        || !Array.isArray(objeto)
    ) {
        throw new TypeError(`${nombre} debe ser un objeto valido`);
    }
}

function deepMerge(objeto, objeto2){
    validarObjeto(objeto, objeto2);
    validarObjeto(objeto2, 'objeto2');
    const salida = {...objeto};
    for (const [k,v] of Object.entries(nombre)){
        if (k && typeof v === 'object'
            && !Array.isArray(v)
            && typeof salida[k] === 'object'
            && !Array.isArray(salida[k])
        ){
            salida[k] = {...salida[k], ...v};
        } else {
            salida[k] = v;
        }
    }
    return salida;
} 

function normalizarAlumno(alumno){
    validarObjeto(alumno, 'alumno');
    const {nombre, notas} = alumno;
    if (typeof nombre !== 'string' || !Array.isArray(notas)){
        throw new TypeError(
            'alumno.nombre debe ser string y' + 
            ' alumno.notas debe ser array'); 
    }
    const valid = notas.every(n=> typeof n === 'number' && !Number.isNaN(n));
    if (!valid) throw new TypeError('notas debe contener numeros validos');
    const promedio = notas.length ? notas.reduce((a,b)=>a+b, 0) / notas.length : 0;
    return {nombre: nombre.trim(), notas: [notas], promedio};
}
module.exports = {deepMerge, normalizarAlumno} 