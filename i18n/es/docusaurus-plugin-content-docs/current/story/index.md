---
id: index
title: Historia del desarrollo
slug: /story
sidebar_label: Historia del desarrollo
description: Por qué se creó AURA y cómo se construyó con IA, los errores con los que nos topamos y lo que aprendimos en el camino.
---

# Historia del desarrollo

Por qué nació AURA y cómo se construyó, escrito para que puedas seguirlo sin ningún conocimiento técnico.

---

## Capítulo 1: Por qué la hicimos

### Unas gafas que muestran texto frente a tus ojos

Todo empezó con las gafas inteligentes Even G2. Parecen unas gafas comunes, pero pueden mostrar texto pequeño en el lente, así que puedes leer información mientras caminas o vas en tren sin sacar el teléfono.

Queríamos leer noticias en ellas, así que primero creamos una app llamada **GNews**: un programa en una mini PC en casa reunía los artículos y las gafas los recibían de ahí. Funcionaba lo bastante bien para el trayecto diario.

### Pero necesitaba una computadora en casa

El problema era la instalación:

Gafas ← Teléfono ← Mini PC en casa (la parte que reúne los artículos)

Usarla fuera de casa significaba conectarse de vuelta a la casa por una red especial (Tailscale). Eso está bien para una persona, pero no puedes entregárselo a otros con un “primero, instala un servidor en casa”.

**Necesitábamos un lector de artículos que funcionara por completo en el teléfono.**

### Y una razón más

Un lector de RSS reúne las novedades de sitios de noticias y blogs en una sola lista, de modo que ves solo los artículos nuevos en lugar de visitar decenas de sitios cada día. Usábamos esas herramientas desde hacía años, pero nunca encontramos una que nos dejara leer como queríamos.

Así que el lector que necesitaban las gafas sería también el lector que queríamos usar todos los días. Los dos motivos se juntaron en una sola app: AURA.

### “Si no existe, constrúyelo”

Antes, crear una app era un trabajo para profesionales. Pero las cosas habían cambiado: ya existían herramientas de IA que escriben código (Claude Code).

Diseñas, das instrucciones, compruebas el resultado en un teléfono real y pides que lo corrijan si está mal. Ya no tenías que escribir cada línea tú mismo, siempre que pudieras **decidir qué construir y juzgar si quedó bien hecho**. Así empezó AURA.

---

## Capítulo 2: Qué tipo de app es

### La idea básica

AURA es un **lector de RSS sin servidor de sincronización**.

Muchos lectores dependen de un servicio en la nube. Sincronizar el estado de lectura entre dispositivos es cómodo, pero exige una cuenta y significa entregarle a una empresa lo que lees. AURA no hace eso: tus suscripciones y tu estado de lectura se quedan en el dispositivo. No hay cuenta con nosotros ni pantalla de inicio de sesión.

No poder sincronizar es una concesión, a cambio de la tranquilidad de que **nadie te está mirando**. Eso fue lo que elegimos al principio.

:::note Más adelante: sincronización entre dispositivos
Más adelante agregamos la **[sincronización entre dispositivos](/sync)** (AURA Plus, opcional). Aun así, **no construimos un servidor propio**. Los datos se guardan en **una carpeta exclusiva de la app en tu propio Google Drive**, y **nunca los recibimos**. Solo inicias sesión en Google cuando la usas. Si no la usas, todo se queda en el dispositivo, como se describió arriba.
:::

### Lo que puedes hacer

**Reunir artículos**
- Suscribirte ingresando una URL de RSS / Atom
- Agregar una palabra clave y suscribirte a los resultados de búsqueda de Google Noticias
- Agregar fuentes de una lista de 103 fuentes de Japón, para no tener que buscarlas
- Pasarte desde otro lector con un archivo OPML

**Leer**
- Tres diseños de lista (lista / tarjetas grandes / revista)
- Tres vistas: no leídos / todos / guardados
- El texto completo se obtiene por adelantado, así que puedes leer sin conexión
- Búsqueda de texto completo en el dispositivo

**Organizar**
- Agrupar las suscripciones en carpetas y cambiar entre ellas con las pestañas de arriba
- Administrar los artículos leídos y guardados
- Los artículos antiguos se eliminan automáticamente para que no se acumulen

**Leer en las gafas**
- Enviar artículos a las Even G2 y leerlos en el lente
- Los artículos leídos en las gafas también se marcan como leídos en el teléfono

---

## Capítulo 3: Cómo la construimos

### La IA lo escribió todo

Ni una sola línea del código de AURA se escribió a mano. Todo lo escribió una IA (Claude Code). Pero decir “hazme una app” no produce una. El proceso real fue:

1. **Decidir qué construir**: qué pantallas, cómo funcionan, qué datos guardan. Esto lo decide una persona.
2. **Escribir las instrucciones**: describir la función con palabras. Si es vago, obtienes algo distinto.
3. **La IA lo implementa**: escribe el código, lo compila y lo comprueba ella misma en un emulador (un teléfono virtual en una PC).
4. **Comprobar en un teléfono real**: instalarlo y usarlo. Solo una persona puede hacerlo.
5. **Pedir que lo corrijan si está mal**: “es difícil de usar”, “debería funcionar así”, y volvemos al paso 2.

Repetimos este ciclo más veces de las que podemos contar.

### Trabajar por etapas

Intentar construir todo a la vez siempre se desmorona, así que dividimos el trabajo en cinco etapas.

| Etapa | Qué se vuelve posible |
|---|---|
| M1 | Pegar una URL y leer artículos |
| M2 | Los artículos nuevos llegan solos y se conserva el estado de lectura |
| M3 | Carpetas, importación y exportación de OPML |
| M4 | Tres temas, tres modos de lista |
| M5 | Búsqueda, guía de primer uso, preparación para el lanzamiento |

**M2 fue el primer gran obstáculo.** M1 funciona, pero sin estado de lectura ni actualizaciones automáticas no es práctica. Solo en M2 se vuelve una herramienta de todos los días: la dejas y los artículos nuevos se acumulan, y lo que ya leíste desaparece.

---

## Capítulo 4: Lo que fue difícil

Esta tal vez sea la parte central de la historia. Chocamos con muchos muros mientras la construíamos. Aquí van algunos.

### 4-1. Artículos marcados como leídos antes de leerlos

El peor error que puede tener un lector de RSS, porque te hace perderte cosas. Resultó que había **tres causas distintas**.

- **El ajuste nunca funcionó.** Se suponía que “Marcar como leído al desplazarse” se podía desactivar, pero por cómo estaba escrito el código, **seguía activado aunque lo apagaras**. La pantalla lo mostraba como apagado, así que era imposible darse cuenta solo usándola.
- **Cambiar de pestaña marcaba artículos como leídos.** Al cambiar entre las pestañas de carpetas, la posición de desplazamiento se arrastraba. “Hasta dónde llegaste en la lista anterior” se filtraba a la lista nueva, y **la parte de arriba de la lista nueva se trataba como leída**.
- **Pasar rápido entre artículos los marcaba como leídos.** Deslizas a izquierda y derecha entre artículos. Para mostrar el siguiente enseguida, la app **preparaba el artículo vecino en cuanto tu dedo tocaba la pantalla**, y esa preparación lo marcaba como leído, incluso en artículos por los que solo pasabas.

Los tres se corrigieron. Lo que ayudó fue el registro que describimos a continuación.

### 4-2. No veíamos la causa, así que creamos un registro

Cuando algo sale mal, no puedes ver qué pasa dentro del teléfono. Adivinábamos las correcciones y fallábamos muchas veces. Así que pusimos **una grabadora dentro de la app**: una pestaña “Debug” en la configuración que registra lo que hace la app y te deja leerlo.

**Justo después de agregarla, encontramos un problema grande.** Las suscripciones por palabra clave (la búsqueda de Google Noticias) fallaban al obtener el texto completo: **119 de 125** artículos habían fallado y nadie se había dado cuenta. La causa era que los enlaces de Google Noticias **apuntaban a una página de paso** con solo 11 caracteres de texto, mientras que el artículo real estaba en otro lugar.

Después de agregar un paso que calcula la ubicación del artículo real a partir de la página de paso: **los éxitos pasaron de 6 a 25 y los fallos de 119 a 4**.

No puedes corregir lo que no puedes ver. Registrar fue el camino más rápido.

### 4-3. Texto ilegible: un solo byte suelto lo arruina todo

Los artículos de algunos sitios se convertían en cadenas sin sentido como esta, con el texto japonés ilegible:

æ±äº¬ãf»å¤§é˜ªãŠã™ã™ã‚ã€...

Las computadoras manejan los caracteres como números, y la correspondencia entre ellos se llama codificación de caracteres. El japonés tiene varias (UTF-8, Shift_JIS y otras), y si se adivina la equivocada, todos los caracteres se corrompen.

AURA elegía **la codificación con menos caracteres que no se pudieran convertir**. Suena razonable, pero tenía un defecto fatal: **la codificación occidental (Latin-1) informa cero fallos con cualquier dato**. Siempre “convierte”, sea correcto el resultado o no, así que siempre ganaba. Como resultado, **un solo byte suelto en un documento japonés hacía que todo el texto se leyera como Latin-1 y se arruinara**.

Había un segundo problema: la parte que analiza los artículos **volvía a convertir el texto en bytes y lo leía otra vez**, y si la declaración original seguía ahí, el texto se convertía dos veces y se rompía.

Ambos se corrigieron y el texto ilegible desapareció. Los artículos que ya se habían guardado corrompidos se pueden **reparar todos a la vez desde la configuración**.

### 4-4. Los artículos eliminados seguían volviendo

Este desperdicio pasó inadvertido hasta que alguien lo señaló.

AURA elimina automáticamente los artículos antiguos, porque de lo contrario se acumulan sin límite. Pero **volvía a importar los artículos eliminados en la siguiente actualización**: la fuente todavía los listaba, así que parecían nuevos, volvían a entrar y se eliminaban otra vez. Al medirlo:

1.ª actualización → 597 nuevos
2.ª actualización → 597 nuevos
3.ª actualización → 597 nuevos
Total de artículos → se mantuvo en 675

Importaba y eliminaba 597 artículos cada vez. El daño iba más allá del uso de datos: **los artículos que ya habías terminado volvían como no leídos**, porque los artículos reimportados se trataban como totalmente nuevos, y la descarga anticipada del texto completo se repetía cada vez.

La solución fueron las **lápidas**: un pequeño registro de cada artículo eliminado, para que la siguiente importación sepa que “este ya se eliminó antes”.

Después de la corrección → los 597 artículos eliminados no se importan → 0 nuevos

El desperdicio se detuvo.

### 4-5. Texto que se desbordaba de la pantalla de las gafas

La pantalla de las gafas inteligentes es muy pequeña, de solo 576 píxeles de ancho. Un carácter de más y desaparece por el borde. El texto que cabía al revisarlo en una PC **se desbordaba en las gafas reales**, y volvía a pasar por más veces que lo corrigiéramos.

La causa era **cómo se contaba el ancho de los caracteres**. En un navegador de PC, un carácter kanji mide exactamente el doble que una letra latina, pero en las gafas medía **1.75 veces**. La diferencia se acumulaba y desplazaba el texto al final de cada línea.

También habíamos pasado por alto símbolos como estos:

▶ ● ★

Los contábamos con el ancho de una letra latina, pero en las gafas se mostraban **tan anchos como un kanji**, así que solo se desbordaban las líneas con símbolos. Después de ajustar el conteo a las mediciones, todas las pantallas cupieron.

### 4-6. Las instrucciones vagas producen lo equivocado

Este no fue un problema técnico, sino un fallo de proceso. Una vez pedimos que una pantalla quedara “bonita” sin dar una especificación detallada. Sin especificación, la IA tiene que decidir por su cuenta. El resultado no fue lo que teníamos en mente y hubo que rehacerlo.

**Decidir concretamente qué construir es trabajo de la persona.** Si lo dejas vago, siempre vas a rehacer trabajo. Desde entonces, decidíamos el diseño, los tamaños e incluso los tamaños de letra antes de entregar nada.

---

## Capítulo 5: Lo que hicimos para que funcionara

### “No puedes corregir lo que no puedes ver”

Adivinar la causa de un error casi siempre falla. Lo que funcionó una y otra vez en el desarrollo de AURA fue **medir primero**.

- Al agregar el registro Debug, se descubrió un error grande el mismo día
- “El texto se desborda” solo se entendió después de contar los anchos de verdad
- “Los artículos vuelven” fue evidente cuando hicimos tres actualizaciones y pusimos los números en fila

Casi todo lo que corregimos por un “seguramente es esto” se volvió a romper.

### Es mejor no mostrar nada que mostrar algo equivocado

AURA puede extraer automáticamente el texto completo de un artículo, pero a veces tomaba anuncios o rankings en lugar del artículo. De hecho, abrimos un artículo de un sitio de videojuegos y apareció un ranking de más vendidos de Amazon en lugar del texto.

Por eso agregamos una comprobación de que lo extraído de verdad es el artículo:

- Cuántas palabras del titular aparecen en el texto
- Si es mayormente enlaces (los anuncios y los rankings tienen muchos enlaces)

Si la comprobación falla, AURA **no lo fuerza en la pantalla y decide no obtenerlo**. Mostrar solo el resumen es mucho mejor que mostrar el texto equivocado. En nuestras mediciones, los artículos reales coincidían con el titular entre el 75 y el 90 % de las veces, mientras que los rankings coincidían entre el 21 y el 37 %, una diferencia clara.

### Los colores se administran por función

Las pantallas de AURA nunca contienen colores escritos directamente. A cada parte se le da una función, como “fondo”, “texto principal” o “acento”, y cada tema guarda el color real de cada función. Así, cambiar entre los temas claro, oscuro y negro puro solo significa intercambiar la tabla de colores.

También hicimos que **la compilación falle si un color está escrito directamente en el código**, para detectar cualquier descuido al instante.

### La legibilidad se decide con números

Existe un estándar internacional para la diferencia de brillo entre el texto y el fondo (la relación de contraste). Se recomienda una relación de 4.5 o más para la legibilidad. Al elegir el color de marca de AURA, lo medimos en lugar de guiarnos solo por el gusto.

El dorado brillante que consideramos primero obtuvo solo 2.25 sobre fondo blanco y no pasó. Un color más oscuro nos dio 5.81.

La elección final fue **Sumi y Shu (negro tinta y bermellón)**: la mayor parte de la pantalla es neutra, con bermellón solo para lo único que debe destacar. Un lector de RSS es una herramienta para leer texto durante mucho tiempo. Los colores saturados siguen reclamando atención en el borde de tu visión mientras lees; los colores neutros mantienen tus ojos en el artículo.

---

## Capítulo 6: Trabajar con las gafas inteligentes

Esta es la función estrella de AURA, pero hacerla posible requirió algo de investigación.

### Solo había una forma de poner texto en las gafas

Descubrimos que la única forma de mostrar algo en las Even G2 es **a través de la app oficial del fabricante (Even Hub)**. No hay manera de que tu propia app controle las gafas directamente. Así que tenía que funcionar de esta manera:

AURA (guarda los artículos)
↓ pasa los datos de alguna manera
Un pequeño programa en Even Hub
↓
Gafas

La pregunta era ese “de alguna manera”. AURA y Even Hub son **apps separadas**, así que no pueden intercambiar datos directamente.

### Un pequeño servidor dentro del teléfono

La respuesta a la que llegamos: **AURA ejecuta un pequeño servidor dentro de sí misma.** Los servidores suelen estar en algún lugar de internet, pero también puede ejecutarse uno dentro del mismo dispositivo, como una comunicación cerrada que nunca sale de él. El programa de Even Hub va a ese servidor a buscar los artículos.

No sabíamos si esto funcionaría de verdad, porque las restricciones de seguridad podrían bloquearlo. Así que **lo comprobamos primero**: montamos un pequeño servidor de prueba y solo intentamos ver si el lado de las gafas podía conectarse. Funcionó, y el registro lo muestra:

HIT GET /rss/summary Origin= http://127.0.0.1:45453 → 200

Solo después de confirmar la conexión empezamos la implementación real. Si hubiéramos empezado con un “seguramente funcionará”, el esfuerzo podría haberse desperdiciado.

### Cómo se ve en las gafas

La pantalla de las gafas es solo verde, con apenas cuatro tonos, y caben solo unas 10 líneas de texto. No puede verse como el teléfono, así que los roles se reparten:

- **Gafas**: ver lo que llegó y marcar lo que te interesa
- **Teléfono**: leerlo con calma

El flujo principal que tenemos en mente es “guardar” artículos en las gafas y leerlos después en el teléfono.

### Fotos también

Con solo cuatro tonos de verde, pensamos que las fotos eran imposibles. Pero existe una técnica clásica llamada **dithering** (tramado), que crea la ilusión de tonos intermedios mediante la densidad de puntos diminutos, el mismo principio que los puntos de trama de las fotos de los periódicos.

Comparamos tres métodos convirtiendo imágenes de verdad. **Floyd-Steinberg** (difusión del error) fue, con mucha diferencia, el mejor: los paisajes y las personas se reconocían, e incluso pudimos leer los caracteres escritos en un farol de papel.

La conversión era pesada, sin embargo, y tardaba casi 0.6 segundos por imagen. Después de reelaborar el cálculo, quedó **5 veces más rápida**, y confirmamos que **el resultado no cambió ni un solo píxel**. Más rápida, sin renunciar a nada de calidad.

---

## Capítulo 7: Lo que sigue

### A corto plazo

**Lanzada en Google Play (2026-10)**
El 27 de octubre de 2026 empezamos a distribuir la versión de producción en Google Play.

**Corregir mientras la usamos**
El uso diario revela inconvenientes que no esperábamos. Esta es la etapa de resolverlos uno por uno.

### Más adelante

**Una mejor experiencia en las gafas.** Por ahora llega hasta leer artículos. Una posible dirección es avisar con discreción a las gafas cuando lleguen artículos nuevos.

**Otros dispositivos.** La misma idea podría aplicarse a dispositivos con pantallas pequeñas, como los relojes inteligentes.

### Lo que no cambiará

**No operaremos un servidor de sincronización.** La comodidad costaría entregarle a otra persona lo que lees, y este diseño se eligió para evitarlo. Si necesitas mudarte, puedes llevarte tus suscripciones en un archivo OPML. Creemos que eso es suficiente.

---

## Para cerrar

AURA empezó con una idea simple: leer artículos en unas gafas inteligentes.

No teníamos experiencia escribiendo código. Pero sabíamos qué clase de herramienta queríamos y podíamos darnos cuenta cuando algo estaba mal. La IA escribió el código y una persona marcó el rumbo, y esa combinación lo hizo realidad.

Cometimos muchos errores en el camino: rehacer cosas por instrucciones vagas, fallar con correcciones adivinadas e incluso cosas que se informaron como “hechas” y en realidad no existían. Cada vez, volvimos, medimos y lo corregimos. Nada especial, solo **comprobar antes de avanzar**.

Esperamos que esta app le sea útil a alguien.

---

*Desarrollada por Black Cat Fortune Works (Kuroneko Fukuya)*
