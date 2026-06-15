# Reglas del Proyecto - PRAXIS Consultoría Patrimonial

Este documento define las reglas obligatorias de diseño, desarrollo, redacción y cumplimiento legal para el sitio web oficial de **PRAXIS Consultoría Patrimonial**. Cualquier cambio o adición al código debe regirse estrictamente por estos lineamientos.

---

## 1. Reglas de Marca
El objetivo de PRAXIS es transmitir la seriedad y el profesionalismo de una consultoría patrimonial corporativa premium.

*   **Identidad y Sensación**:
    - La marca debe sentirse seria, patrimonial, premium, clara y confiable.
    - Se debe evitar que parezca una gestoría informal o una página promocional genérica de bajo costo.
*   **Colores Corporativos**:
    - Azul marino profundo (`--navy-950`, `--navy-900`) como fondo y tono dominante.
    - Dorado institucional (`--gold-500`, `--gold-400`) para acentos, iconos y botones principales.
    - Blanco cálido y grises suaves para textos de cuerpo y fondos de sección claros.
*   **Tono de Comunicación**:
    - Educativo, prudente, humano, transparente y rigurosamente profesional.
    - Evitar lenguaje exagerado, promesas comerciales agresivas o estilo de venta rápida.
*   **Mensajes Clave**:
    - Frase central de marca: **“Primero claridad. Después decisión.”**
    - Idea estratégica principal: **“Antes de retirar, aportar o pensionarte, revisa tu expediente.”**

---

## 2. Reglas de Cumplimiento y Confianza
Es fundamental mitigar riesgos legales y construir una relación basada en la transparencia absoluta con el usuario.

*   **Sin Promesas Garantizadas**:
    - No se deben prometer resultados garantizados ni usar términos absolutos.
    - Queda estrictamente prohibido usar palabras como *"garantizado"*, *"100% seguro"*, *"recupera seguro"* o *"te conseguimos dinero"*.
*   **Relación con Instituciones**:
    - PRAXIS es una entidad independiente. No se debe afirmar ni sugerir que el servicio está *"avalado por CONSAR, IMSS o Infonavit"*.
    - Los logos de las instituciones gubernamentales y reguladoras solo deben presentarse en franjas informativas de contexto (como referencias de regulación), nunca de forma que sugieran patrocinio o aval oficial de estas organizaciones.
*   **Redacción Orientada al Servicio**:
    - Usar lenguaje explicativo: *"trámites relacionados con"*, *"revisión individual"*, *"sujeto a requisitos"*, *"cada caso requiere diagnóstico"*.
*   **Descargos de Responsabilidad (Disclaimer)**:
    - Se debe mantener visible un aviso de deslinde claro:
      > **Aviso Importante**: *PRAXIS no es una institución gubernamental ni una AFORE. Brindamos asesoría y acompañamiento informativo. Cada trámite está sujeto a requisitos y validación de las instituciones correspondientes.*
*   **Testimonios Prudentes**:
    - Los testimonios deben enfocarse en la claridad del servicio, la rapidez o el trato humano, evitando sonar a promesas comerciales de resultados económicos garantizados.

---

## 3. Reglas de Conversión
El embudo de conversión está enfocado en la consultoría de valor y la generación de confianza.

*   **Canal Principal**: Generar conversaciones ordenadas a través de WhatsApp.
*   **Llamadas a la Acción (CTA)**: Claros pero nunca invasivos o agresivos.
*   **Textos Recomendados para CTA**:
    - *“Solicitar diagnóstico”*
    - *“Hablar por WhatsApp”*
    - *“Revisar mi caso”*
    - *“Agendar revisión”*
*   **Transparencia de Datos**:
    - La página debe explicar de forma transparente qué se analiza y por qué (diagnóstico inicial) antes de requerir datos personales del cliente en los formularios.

---

## 4. Reglas de UX / Mobile
El sitio web debe brindar una experiencia impecable y de alta fidelidad en cualquier dispositivo.

*   **Mobile-First**:
    - La navegación y lectura en dispositivos móviles es prioritaria.
    - Mantener un header limpio con el logo perfectamente visible y un menú de hamburguesa fácil de usar.
    - El botón flotante o bar sticky de WhatsApp debe ser de fácil acceso, pero sin invadir o tapar contenidos esenciales de la página.
*   **Jerarquía Visual y Contraste**:
    - Asegurar que los textos cumplan con las directrices de contraste de accesibilidad.
    - Evitar bloques de texto demasiado largos en móvil; priorizar estructuras visuales en listas o pilares.
    - Proteger la distribución de escritorio: los ajustes de responsividad en móviles no deben romper el diseño, la alineación ni los anchos máximos en desktop.

---

## 5. Reglas Técnicas y de Desarrollo
Estabilidad del sitio web y gestión ordenada del código fuente.

*   **Auditoría y Planificación**:
    - Auditar siempre la estructura actual del archivo antes de realizar cualquier modificación.
    - No eliminar componentes o estilos globales sin justificar el cambio técnico.
*   **Flujo de Cambios en Etapas**:
    - Separar las implementaciones de HTML de las reglas de CSS o la lógica en JS.
    - Realizar pruebas locales visuales tanto en móvil como en escritorio antes de confirmar los cambios.
*   **Control de Versiones y Despliegues**:
    - No realizar push o despliegues automáticos a producción (`main`) sin previa aprobación o validación local completa.
*   **Entregables al Finalizar Tareas**:
    Cada tarea de desarrollo terminada debe ir acompañada de un reporte estructurado que incluya:
    1.  Archivos modificados y líneas de código relevantes.
    2.  Resumen detallado de los cambios realizados.
    3.  Riesgos o efectos colaterales potenciales detectados.
    4.  Capturas de pantalla del comportamiento visual (escritorio y móviles) o instrucciones claras para su verificación.
    5.  Checklist de pruebas ejecutadas.
