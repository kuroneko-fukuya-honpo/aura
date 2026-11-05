---
id: index
title: Conectar con Even G2
slug: /g2
sidebar_label: Conectar con Even G2
---

# Conectar con Even G2

Puedes mostrar los artículos de AURA en **Even Realities G2** (lentes inteligentes).
Los artículos se pasan **solo dentro del mismo teléfono** y nunca pasan por un servidor externo.

Así funciona.

```
AURA (phone) ── HTTP on 127.0.0.1 ──▶ Plugin in the Even Realities app ──▶ G2
```

AURA ejecuta un pequeño servidor que existe solo dentro de tu teléfono, y el complemento para los lentes
(**AURA for G2**) lee los artículos desde allí.

:::info
La compatibilidad con Even G2 es una función de **[AURA Plus](/plus)**.
:::

## Qué necesitas

- AURA (instalada en este dispositivo)
- La app de Even Realities y unos G2 emparejados
- El complemento para los lentes **AURA for G2** (disponible en Even Hub)

Lee titulares y artículos en tus lentes sin sacar el teléfono. El botón de abajo abre la página de AURA for G2 en Even Hub.

<p><a className="button button--primary button--lg" href="https://evenhub.evenrealities.com/landing?package_id=ca.kuroneko.aura.g2">Instalar AURA for G2 desde Even Hub</a></p>

También puedes abrirlo desde “Instalar AURA for G2 desde Even Hub” en **Configuración > Conexiones > Even G2 (lentes)** en AURA.

## Pasos

### 1. Actívalo en AURA

En **Configuración > Conexiones > Even G2 (lentes)**, **activa** “Enviar a los lentes”.

- Aparece una **frase de acceso de 8 caracteres** (tócala para copiarla)
- Si te pide permiso para notificaciones, acéptalo (AURA muestra una notificación permanente mientras envía)
- El puerto es **8777** por defecto

### 2. Ingresa la frase de acceso en el complemento

Abre **AURA for G2** en la app de Even Realities. En la pantalla que aparece en tu teléfono,
ingresa la frase de acceso y el puerto, y luego toca “Guardar y probar”.

Cuando aparezca “Conectado a AURA”, ya está. La frase de acceso se guarda, así que **solo la ingresas la primera vez**.

### 3. Ábrelo desde los lentes

Inicia **AURA for G2** desde el menú de los G2.

## Controles de los lentes

| Acción | Qué hace |
| --- | --- |
| Tocar | Avanzar (carpetas → lista de artículos → texto del artículo) |
| Tocar dos veces | Retroceder. En el texto del artículo, abre un menú (Volver a la lista / Guardar o Quitar de guardados / Marcar como no leído / Cancelar). En la primera pantalla (lista de carpetas), pide confirmar la salida |
| Deslizar (arriba/abajo) | Mover la selección, desplazar el texto del artículo |

- Para cambiar lo que se muestra, toca la fila superior de la lista de carpetas (“Vista: Sin leer (texto completo) (toca para cambiar)”). Cambia Sin leer → Todos → Guardados. En los lentes solo aparecen los artículos cuyo texto completo ya se obtuvo (actualiza AURA en tu teléfono para obtener el texto completo)
- Marcas de la lista de artículos: `▶` = fila seleccionada / `●` = sin leer / `★` = guardado / `◎` = tiene texto completo, se puede leer sin conexión
- Los artículos que abres en los lentes **también se marcan como leídos en AURA**. Lo mismo ocurre al guardar

## Si no funciona

| Se muestra en los lentes | Qué revisar |
| --- | --- |
| No se puede conectar con AURA | Abre AURA en tu teléfono y comprueba que “Enviar a los lentes” esté activado |
| La frase de acceso no coincide | Revisa si la frase de acceso se regeneró en AURA y vuelve a ingresarla |
| Se requiere AURA Plus | Cambia a AURA Plus (también funciona durante la prueba gratuita). Se activa sin necesidad de volver a abrirlo en los lentes |

Mientras envía, la notificación permanente de AURA permanece visible (mientras usas los lentes, AURA pasa a segundo plano,
y sin la notificación el sistema la detendría). En los dispositivos donde no se mantiene en ejecución, quita a AURA de la
optimización de batería. Cuando termines, desactiva “Enviar a los lentes” y la notificación desaparece con él.

## Por qué hay una frase de acceso

A `127.0.0.1` de un dispositivo **también pueden acceder otras apps del mismo dispositivo**.
Para que nadie pueda leer tus artículos sin tu permiso, AURA responde solo cuando la frase de acceso coincide.
