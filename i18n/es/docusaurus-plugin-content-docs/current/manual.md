---
id: manual
title: Cómo usar AURA
slug: /manual
sidebar_label: Cómo usar (resumen)
sidebar_position: 3
description: Cómo usar AURA, todo en una página. Lo básico, cómo conservar artículos para leerlos sin conexión y consejos para usarla sin complicaciones.
---

import Video, {Videos} from '@site/src/components/Video';

# Cómo usar AURA

Esta página resume cómo usar AURA. Léela desde el principio o salta a una sección desde el índice.
Para más detalles, sigue los enlaces al final de cada sección.

También puedes verlo en video. El audio está en japonés (es la edición japonesa de AURA). Activa los subtítulos en inglés (CC).

<Videos>
  <Video id="sS129O4XLos" title="Un recorrido rápido por AURA (7 min)" lang="en" />
  <Video id="fDuiUGlT-9w" title="Guía de usuario de AURA: el manual completo (20 min)" lang="en" />
</Videos>

## Encuentra lo que quieres hacer

<details>
<summary>Suscribirte a un sitio de noticias</summary>

1. En la lista de artículos, toca **⋮** arriba a la derecha > **Agregar suscripción**
2. Toca **Ingresar una URL**, escribe la URL del sitio (la de un sitio o la de un RSS / Atom) y toca **Buscar**
3. En **Agregar a la carpeta**, elige una carpeta (si no eliges ninguna, se guarda en **Sin categoría**) y luego toca **Agregar a …**

Si no conoces la URL, elige una opción del **Directorio de fuentes** en la misma pantalla. → [Agregar una suscripción](/guide/subscribe)

</details>

<details>
<summary>Reunir noticias sobre las palabras que te interesan</summary>

En **Agregar suscripción**, toca **Palabra clave**, escribe una palabra y toca **Reunir “…”**.
Los resultados de búsqueda de esa palabra llegan a tu lista, igual que los de una fuente.
Además de Google Noticias de tu país, también puedes elegir **Medium** (por etiqueta), **DEV** (por etiqueta) y **Hacker News** (historias cuyo título contiene tus palabras). Están desactivados de forma predeterminada. Toca **Vista previa** para ver lo que se encuentra antes de elegir. → [Agregar una suscripción](/guide/subscribe#where-to-search)

</details>

<details>
<summary>Guardar artículos para leerlos después</summary>

**Mantén presionado** un artículo en la lista o toca el marcador en la parte superior de la pantalla del artículo.
Los artículos guardados no se eliminan cuando AURA limpia los artículos antiguos, y AURA conserva su texto y sus imágenes para que puedas leerlos sin señal. → [Leer y guardar](/guide/read)

</details>

<details>
<summary>Leer en el tren o en un avión</summary>

Configura **Configuración > Sin conexión y almacenamiento > Conservar artículos para leer sin conexión** en **Con Wi-Fi (recomendado)**.
El texto y las imágenes de los artículos nuevos y de los artículos guardados se conservan en tu dispositivo. → [Conservar artículos para leer sin conexión](#offline)

</details>

<details>
<summary>Agrandar el texto o cambiar los colores</summary>

Toca **aA** arriba a la derecha en la pantalla del artículo para cambiar el tamaño del texto. En **Configuración > Apariencia**, elige el tema y el color de acento. → [Tema y texto](/guide/theme)

</details>

## Lo básico

### Suscribirte

Suscríbete al RSS / Atom de un sitio de noticias, a una palabra clave o a una fuente del directorio integrado en la app.
Las suscripciones se agrupan en carpetas, y las pestañas sobre la lista son tus carpetas.
→ [Agregar una suscripción](/guide/subscribe) · [Carpetas](/guide/folders)

### Leer

Toca un artículo de la lista para abrir la pantalla del artículo. AURA **extrae solo el texto del artículo** de su página y lo muestra sin anuncios ni menús.
Desliza a la izquierda o a la derecha para pasar al siguiente artículo.
Si AURA no puede extraer el texto, verás el resumen del RSS. Para leer el resto, toca **Abrir el artículo original**.
→ [Obtener el texto completo](/guide/fulltext)

### Leer y guardar

Al abrir un artículo, se marca como leído (desplazarte por la lista no lo hace).
Toca **⋮** arriba a la derecha de la lista > **Marcar todo como leído** para elegir un rango y marcar muchos como leídos de una vez. Guarda los artículos que quieras leer después.
→ [Leer y guardar](/guide/read)

### Cambiar el aspecto de la lista

Arriba a la izquierda de la lista, toca **Todos los artículos ▾** para cambiar a solo los no leídos, los guardados, el historial de lectura y más.
En **Configuración > Apariencia**, elige el **Aspecto de lista** (2 columnas, Tarjetas grandes o Lista) y el **Aspecto de revista** (deslizando a izquierda y derecha).
→ [Diseño de la lista](/guide/list-mode)

### Ver lo que se está ejecutando ahora

Mientras AURA actualiza o obtiene texto completo en segundo plano, aparecen **↻ y un número** arriba a la derecha de la lista.

- **Tocar** — Muestra la lista de **Tareas en curso** durante 4 segundos (se queda mientras la tocas o te desplazas por ella)
- **Mantener presionado** — Mantiene la lista abierta (el símbolo cambia a una chincheta). Vuelve a mantener presionado, o toca ✕, para regresar

Cuando todo termina, ves **✓ Todo listo** y el símbolo desaparece.

## Conservar artículos para leer sin conexión {#offline}

Este ajuste **conserva el texto y las imágenes de los artículos en tu dispositivo** para que puedas leer sin señal.
En **Configuración > Sin conexión y almacenamiento > Conservar artículos para leer sin conexión**, elige una de estas opciones.

| Opción | Qué conserva | Conexión |
| --- | --- | --- |
| **Con Wi-Fi (recomendado)** | El texto y las imágenes de los artículos nuevos (durante 48 horas desde que llegan) y de los artículos guardados | Solo con Wi-Fi |
| **No conservar** | Nada | Obtiene solo el artículo que abres, en el momento en que lo abres |

- Para los artículos con más de 48 horas, AURA obtiene solo el que abres, en el momento en que lo abres
- Los artículos guardados se obtienen primero
- Para ver cuánto se conserva, revisa **Espacio en uso** en la misma pantalla (**Artículos disponibles sin conexión** muestra la cantidad).
  Cuánto se elimina en la limpieza depende de **Cantidad que se conserva en el dispositivo** (los artículos guardados no se eliminan)

:::note
AURA conserva los artículos **mientras AURA está cerrada**. Mientras AURA está abierta, hace una pausa para mostrar primero la lista y los artículos,
y retoma el trabajo un rato después de que la cierras. También descansa mientras tu dispositivo está caliente, hasta que se enfría.
:::

## Cuando tienes muchas suscripciones {#many-feeds}

Con **más de 150 suscripciones**, cada actualización tarda más y usa más batería y datos (aparece un aviso arriba en **Administrar suscripciones**).
Si conservas solo las fuentes que lees seguido, todo se vuelve más ligero.

| Suscripciones | Tiempo de una actualización (típico) |
| --- | --- |
| 50 | 27.7 segundos |
| 100 | 46.7 segundos |
| 150 | 83.3 segundos |
| 200 | 106.7 segundos |

Son estimaciones y varían según el dispositivo (medidas en un Galaxy Z Fold2 con Wi-Fi).

## Movimiento del marco de fotos {#frame}

En **Configuración del marco de fotos > Movimiento**, elige una de las 8 formas de mostrar las fotos. En cada fila se mueve una pequeña muestra.

| Movimiento | Qué hace |
| --- | --- |
| **Ken Burns (el predeterminado)** | Acerca y desplaza la imagen lentamente entre una foto y otra. La dirección y el acercamiento cambian cada vez |
| **Clásico** | Superpone una foto sobre otra |
| **Origami** | La pantalla se pliega como un origami para mostrar la siguiente foto |
| **Móvil** | Marcos colgantes que entran balanceándose con suavidad |
| **Muro de fotos** | Llena la pantalla con fotos, cambiando unas pocas a la vez |
| **Paneles deslizantes** | Los paneles entran deslizándose. Activa **Vintage** para darles un borde y un tinte de foto antigua |
| **Flotante** | Las fotos flotan hacia arriba o se enderezan girando |
| **Automático** | Recorre los estilos anteriores |

- **Ajuste de la foto** — **Ajustar al ancho de la pantalla** (el predeterminado) o **Ajustar al alto de la pantalla**. Lo que no cabe se muestra a medida que la foto se mueve
- Las fotos pequeñas no se estiran. Se apoyan sobre una copia desenfocada de sí mismas
- Cuando está activada la opción “Quitar animaciones” de tu dispositivo, el marco de fotos cambia lentamente en el estilo Clásico

## Sobre el contenido hecho con IA {#ai}

Los informes de AURA Brief (PowerPoint, PDF, Word y Excel) y partes de los guiones del resumen en audio los crea AURA automáticamente a partir de los títulos y resúmenes de los artículos que sigues,
y de información que la IA (Claude, de Anthropic, y otras) consultó.

El resumen en audio es **AURA Brief · Audio** (Beta). Dos gatos te cuentan las noticias: Jet (el presentador) y Kit (el comentarista).
Para cambiar cómo suenan, elige **Estándar** o **Joven** en **Configuración > Leer y escuchar > Leer en voz alta > Escribir guiones con IA > Voz de AURA Brief**.
Por ahora, los guiones escritos con IA todavía no están disponibles en español: hoy funcionan en japonés y en inglés.

- **Lo que escribe la IA puede contener errores o información desactualizada.** Verifica siempre los datos, las fechas y las cifras en los artículos originales (los códigos QR de los informes y **Artículos fuente** en el resumen en audio)
- Los informes y los resúmenes en audio no son consejos para decisiones de inversión, médicas, legales ni de otro tipo
- Los informes y el audio son para tu uso personal. Incluyen títulos de artículos, resúmenes y audio, así que no los republiques ni los compartas
- Si encuentras un error, toca **Enviar comentarios a AURA** arriba a la derecha en el visor del informe o en el guion del resumen en audio

## Consejos para usarla sin complicaciones

- **Deja tu dispositivo cargando y con Wi-Fi** — El trabajo pesado, como obtener texto completo y traducir titulares de otros idiomas, se hace en esos momentos. Deja que termine durante la noche y tus artículos estarán listos para leer por la mañana
- **Cierra AURA cuando termines de leer** — Mientras AURA está abierta, pone en pausa el trabajo pesado en segundo plano para que la pantalla responda bien. Al cerrarla, ese trabajo continúa
- **Guarda los artículos que lees seguido** — AURA obtiene primero el texto y las imágenes de los artículos guardados, y la limpieza nunca los elimina
- **Cancela las suscripciones que ya no uses** — Menos suscripciones significan actualizaciones más rápidas y menos datos y batería. Cancélalas en **Administrar suscripciones**
- **Oculta o fija palabras** — Oculta los artículos con palabras que no quieres ver o fíjalos arriba (**Filtros**, [AURA Plus](/plus))
- **¿Necesitas ayuda?** — Escríbenos desde [Contacto](/contact)
