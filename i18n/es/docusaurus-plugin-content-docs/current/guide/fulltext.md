---
id: fulltext
title: Obtención del texto completo
slug: /guide/fulltext
---

# Obtención del texto completo

Las suscripciones RSS suelen incluir solo un resumen, así que AURA **extrae solo el texto del artículo** de la página del artículo.
Quita los anuncios, menús, recuadros de artículos relacionados y otros elementos que estorban, y muestra el titular, el texto y las imágenes con el tamaño de texto y los colores de AURA.

![Un artículo con su texto completo](/img/guide/en/fulltext-article.jpg)

## Cuándo obtiene AURA el texto completo

- **Descarga anticipada**: con Wi-Fi, mientras AURA está cerrada, AURA conserva el texto completo de los artículos guardados y de los artículos nuevos (durante 48 horas después de que llegan). La descarga anticipada automática usa hasta 50 MB al día (este límite no se aplica mientras tu dispositivo se carga con Wi-Fi). Consulta [Leer sin conexión](/guide/offline)
- **Obtener texto completo**: el botón que está al final de la pantalla del artículo. Tócalo para obtenerlo de inmediato (si ya se obtuvo, muestra **Texto completo (obtenido)**)

Debajo del artículo también ves **Abrir el artículo original** (abre la página original en tu navegador) y una lista de **Artículos de la misma fuente**.

![Los botones debajo de un artículo](/img/guide/en/fulltext-buttons.jpg)

## Páginas creadas con JavaScript

Algunos sitios dibujan el texto del artículo con JavaScript después de abrir la página. Sin ayuda, el texto se vería vacío, así que
AURA **muestra la página en una pantalla invisible que se usa solo para obtener el texto** y luego lo extrae.
Esto no se configura sitio por sitio, así que funciona en una amplia variedad de sitios creados de esta forma.

- Mientras muestra la página, AURA no carga imágenes, sonido, video ni tipos de letra, y se rinde si la página no se muestra pasado un tiempo
- La descarga anticipada usa este método solo para unos pocos artículos por actualización. Cuando tocas **Obtener texto completo**, AURA lo obtiene sin importar la cantidad
- La pantalla que muestra el texto obtenido no ejecuta JavaScript (por seguridad)

## Artículos de varias páginas

Los artículos divididos en páginas con “Leer más” se unen y se muestran como uno solo.
La parte superior del artículo muestra “Mostrando las N páginas del artículo unidas.” Si AURA no pudo obtener las páginas siguientes, muestra
“Mostrando hasta la página N (no se pudieron obtener las páginas siguientes).”
En un artículo del que AURA obtuvo antes solo algunas páginas, toca **Obtener texto completo** al final para unir todas las páginas de nuevo (con Wi-Fi, AURA también las vuelve a obtener en orden cuando abres el artículo).

## Cuando no se puede obtener el texto completo

Algunas fuentes no permiten extraer el texto. Si el texto extraído no coincide con el titular,
AURA **deliberadamente no lo usa**, para que no se muestren artículos relacionados ni anuncios como si fueran el texto del artículo.

En ese caso, AURA muestra tal cual el texto o el resumen de la suscripción RSS (no aparece ningún aviso especial).
Para leer el resto, toca **Abrir el artículo original**.

AURA no sigue reintentando un artículo que falló una vez en la siguiente descarga anticipada.

## Herramientas para leer mejor

- **aA** arriba a la derecha: tamaño del texto (consulta [Tema y texto](/guide/theme))
- **⋮** arriba a la derecha > **Ocultar partes**: selecciona las partes sobrantes del texto y ocúltalas. Puedes mostrar o restaurar las partes ocultas desde **⋮**
- Mantén presionada una imagen > **No mostrar esta imagen de nuevo**: **Ocultar en esta suscripción** / **Solo este artículo**
- Para revisar y restaurar lo que ocultaste, ve a Configuración > Leer y escuchar > **Imágenes y partes ocultas**
- Los artículos en un idioma distinto del predeterminado de tu dispositivo muestran **Traducir este artículo** (usa la traducción de tu dispositivo, así que no tiene costo)
