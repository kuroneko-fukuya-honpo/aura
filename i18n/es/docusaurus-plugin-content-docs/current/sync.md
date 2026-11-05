---
id: sync
title: Cómo funciona la sincronización entre dispositivos
slug: /sync
sidebar_label: Cómo funciona la sincronización
sidebar_position: 15
---

# Cómo funciona la sincronización entre dispositivos

Con AURA Plus puedes **mantener tus suscripciones y tu configuración iguales que en otro dispositivo**.
Esta página explica, con palabras sencillas, qué coincide y qué no, y cómo se muestran los números.

:::info En resumen
Las suscripciones, el estado leído/no leído y los elementos guardados **coinciden entre dos dispositivos**. Sin embargo, **el texto y las imágenes de los artículos no coinciden**
(cada dispositivo los obtiene por sí mismo). El número de artículos de la lista no coincidirá si "Cantidad que se conserva en el dispositivo" es distinta entre dispositivos. Hasta que termine una sincronización, los números pueden diferir por un momento.
:::

## 1. Qué coincide

Lo siguiente se mantiene igual en todos los dispositivos.

- La configuración
- Las suscripciones (las fuentes a las que te suscribiste)
- Las carpetas
- Los filtros y las reglas para ocultar
- Los artículos guardados
- El estado leído/no leído
- La lista de artículos (qué artículos hay)

Si agregas una suscripción, marcas un artículo como leído o guardas un artículo en un dispositivo,
el cambio llega al otro dispositivo después de una sincronización.

## 2. Qué no coincide (y por qué)

**El texto y las imágenes de los artículos no coinciden.** Es a propósito.

El texto y las imágenes de los artículos son pesados, así que enviarlos entre dispositivos usaría más datos.
En cambio, **cada dispositivo los obtiene por sí mismo desde la fuente**.

Por eso, **un mismo artículo puede tener su texto completo en un dispositivo y solo el título en otro**.
Si abres un artículo que solo tiene el título, ese dispositivo aún no ha obtenido su texto.
Si la fuente todavía conserva el artículo, el texto llega en la próxima actualización.

<strong>Los ajustes de "Sin conexión y almacenamiento", como "Cantidad que se conserva en el dispositivo", son de cada dispositivo</strong> (porque el espacio libre y las conexiones son distintos entre dispositivos).

## 3. Cómo se muestran los números

**Las suscripciones, el estado leído/no leído y los elementos guardados coinciden entre dos dispositivos**, porque se sincronizan.
Sin embargo, **el número de artículos que se muestra en la lista** no coincidirá si "Cantidad que se conserva en el dispositivo" es distinta entre dispositivos.

Ten en cuenta también lo siguiente.

- **Los números difieren por un momento hasta que termina una sincronización.** Justo después de hacer algo en un dispositivo,
  o justo después de que cada dispositivo obtenga artículos nuevos, los números pueden verse distintos.
  Sincroniza de nuevo y coincidirán.
- Si la app muestra **"✓ Sincronizado"**, el contenido coincidía con tus otros dispositivos
  en la última sincronización.
- Cuando muestra **"● N cambios aún no se han sincronizado"**, hay N acciones que todavía no has enviado
  (como marcar como leído o como no leído).
  En la próxima sincronización llegarán también a tus otros dispositivos.

:::note ¿Por qué no se muestran de inmediato los números del otro dispositivo?
AURA no tiene un servidor de sincronización. Intercambia datos mediante archivos en tu propio Google Drive.
Por eso la app no obtiene "los números actuales del otro dispositivo" en el momento.
En cambio, te indica si las cosas coinciden según <strong>si hay cambios que aún no has enviado</strong>.
:::

## 4. La primera sincronización tarda

**La primera sincronización puede tardar unos minutos si tienes muchas fuentes.**
Esto se debe a que los dispositivos primero reúnen la lista de todos los artículos.

- **La sincronización continúa aunque cierres la pantalla.** No se detiene cuando sales de Configuración.
- **Si se detiene a la mitad, continúa desde donde se quedó la próxima vez que abras la app.** No empieza de nuevo.

A partir de la segunda vez, solo se envían los cambios desde la última sincronización, así que termina rápido.

## 5. Dispositivo principal

Cuando un mismo elemento es distinto entre dos dispositivos, gana la versión del **dispositivo principal**.
Elígelo en <strong>Configuración > Conexiones > Sincronizar entre dispositivos > Hacer de este el dispositivo principal</strong>.
Cuando cambias de teléfono, el dispositivo nuevo puede tomar el relevo como principal aunque ya no tengas el anterior.

- **Rehacer la sincronización** (en el dispositivo principal): hace que las suscripciones, carpetas, configuración, filtros y reglas para ocultar de tus otros dispositivos coincidan exactamente con las del dispositivo principal (los artículos guardados se conservan)
- **En pausa**: un dispositivo que no se ha sincronizado en 30 días o más aparece como "en pausa". Sus registros no se eliminan y vuelve a estar activo cuando sincronizas en ese dispositivo
- **Cuando termina AURA Plus**: la sincronización se detiene. Los datos de Google Drive no se eliminan. Si vuelves a AURA Plus, la sincronización se reanuda sola en la siguiente sincronización

## 6. Dónde están los datos

Los datos que se usan para sincronizar se guardan en <strong>la "carpeta específica de la app" de tu propio Google Drive</strong>.

- Esta carpeta es un lugar donde solo AURA puede leer y escribir, y **ni siquiera tú puedes verla**
  (no aparece en la lista de archivos de tu Drive).
- **Black Cat Fortune Works (Kuroneko Fukuya), el proveedor de esta app, no recibe estos datos.**
  Los datos existen solo en tu propio Google Drive.
- Aunque dejes de sincronizar (cierres sesión), las suscripciones y la configuración de tu dispositivo se quedan como están.

Para más detalles, consulta la [Política de privacidad](/privacy).

## Para usar la sincronización

La sincronización entre dispositivos es una función de **AURA Plus**.
Para empezar, inicia sesión con Google desde <strong>Configuración > Conexiones > Sincronizar entre dispositivos</strong> en la app.

Si solo quieres pasar tus suscripciones y tu configuración a un teléfono nuevo, puedes hacerlo sin AURA Plus:
guárdalas en un archivo en <strong>Configuración > Conexiones > Cambiar a un teléfono nuevo</strong> y llévalo contigo.
