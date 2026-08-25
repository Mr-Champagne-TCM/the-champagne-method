"""Generate the TCM emotion wheel SVG.

Our own wheel, our own words, our own rendering — nothing reproduced from a
copyrighted chart. Three rings: eight families at the centre, three middle
words each, two finer words under each of those (8 / 24 / 48).

Pleasant families are placed contiguously so the asymmetry the library entry
describes is visible: one small region says stay, the rest are directions.
"""
import math
import pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "public" / "emotion-wheel.svg"

# (family, base colour, [(middle, [outer, outer]), ...])
FAMILIES = [
    ("Joyful", "#3FE0C5", [
        ("Content", ["Satisfied", "Grateful"]),
        ("Excited", ["Eager", "Playful"]),
        ("Loving", ["Tender", "Connected"]),
    ]),
    ("Powerful", "#E8CBA0", [
        ("Confident", ["Capable", "Assured"]),
        ("Proud", ["Respected", "Valued"]),
        ("Free", ["Open", "Expansive"]),
    ]),
    ("Peaceful", "#7FD8E8", [
        ("Calm", ["Settled", "Relaxed"]),
        ("Safe", ["Held", "Trusting"]),
        ("Clear", ["Focused", "Present"]),
    ]),
    ("Angry", "#9B4FD0", [
        ("Frustrated", ["Blocked", "Exasperated"]),
        ("Resentful", ["Bitter", "Betrayed"]),
        ("Irritated", ["Annoyed", "Impatient"]),
    ]),
    ("Sad", "#6A63DC", [
        ("Lonely", ["Isolated", "Abandoned"]),
        ("Disappointed", ["Let down", "Deflated"]),
        ("Grieving", ["Heartbroken", "Empty"]),
    ]),
    ("Scared", "#4F79D8", [
        ("Anxious", ["Restless", "Overwhelmed"]),
        ("Insecure", ["Inadequate", "Exposed"]),
        ("Threatened", ["Trapped", "Helpless"]),
    ]),
    ("Ashamed", "#7A52C2", [
        ("Guilty", ["Remorseful", "Regretful"]),
        ("Embarrassed", ["Self-conscious", "Foolish"]),
        ("Small", ["Inferior", "Unwanted"]),
    ]),
    ("Disgusted", "#8A63A8", [
        ("Repelled", ["Revolted", "Sickened"]),
        ("Disapproving", ["Critical", "Dismissive"]),
        ("Withdrawn", ["Numb", "Detached"]),
    ]),
]

SIZE, C = 1040, 520
R0, R1, R2, R3 = 0, 188, 316, 476          # ring boundaries
PAPER, INK = "#F3EFF7", "#160A33"


def mix(hex_color: str, toward: str, t: float) -> str:
    a = [int(hex_color[i:i + 2], 16) for i in (1, 3, 5)]
    b = [int(toward[i:i + 2], 16) for i in (1, 3, 5)]
    return "#" + "".join(f"{round(x + (y - x) * t):02x}" for x, y in zip(a, b))


def pt(r: float, deg: float):
    a = math.radians(deg - 90)
    return C + r * math.cos(a), C + r * math.sin(a)


def wedge(r_in: float, r_out: float, a0: float, a1: float) -> str:
    large = 1 if (a1 - a0) > 180 else 0
    x0, y0 = pt(r_out, a0)
    x1, y1 = pt(r_out, a1)
    x2, y2 = pt(r_in, a1)
    x3, y3 = pt(r_in, a0)
    if r_in <= 0:
        return (f"M {C:.2f} {C:.2f} L {x0:.2f} {y0:.2f} "
                f"A {r_out:.2f} {r_out:.2f} 0 {large} 1 {x1:.2f} {y1:.2f} Z")
    return (f"M {x0:.2f} {y0:.2f} A {r_out:.2f} {r_out:.2f} 0 {large} 1 {x1:.2f} {y1:.2f} "
            f"L {x2:.2f} {y2:.2f} A {r_in:.2f} {r_in:.2f} 0 {large} 0 {x3:.2f} {y3:.2f} Z")


def radial_label(text: str, r: float, deg: float, size: float, fill: str, weight: str) -> str:
    """Text laid along the radius, flipped on the left half so it never reads upside down."""
    x, y = pt(r, deg)
    # Text reads outward along the radius; on the left half that direction points
    # leftward, so flip it end-for-end to keep every word right side up.
    rot = deg - 90
    if 180 < (deg % 360) < 360:
        rot += 180
    esc = text.replace("&", "&amp;").replace("<", "&lt;")
    return (f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.2f} {x:.2f} {y:.2f})" '
            f'font-size="{size}" font-weight="{weight}" fill="{fill}" '
            f'text-anchor="middle" dominant-baseline="central" '
            f'font-family="Outfit, Segoe UI, sans-serif">{esc}</text>')


def build() -> str:
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE} {SIZE}" '
        f'width="{SIZE}" height="{SIZE}" role="img" '
        f'aria-label="The Champagne Method emotion wheel: eight families of feeling in three rings of increasing precision">',
        '<title>The emotion wheel — The Champagne Method</title>',
        '<defs><radialGradient id="ground" cx="50%" cy="50%" r="70%">'
        '<stop offset="0%" stop-color="#2d1155"/><stop offset="100%" stop-color="#0b1428"/>'
        '</radialGradient></defs>',
        f'<rect width="{SIZE}" height="{SIZE}" fill="url(#ground)"/>',
    ]

    span = 360 / len(FAMILIES)
    for fi, (family, base, middles) in enumerate(FAMILIES):
        a0 = fi * span
        c_core = base
        c_mid = mix(base, PAPER, 0.34)
        c_out = mix(base, PAPER, 0.62)

        parts.append(f'<path d="{wedge(R0, R1, a0, a0 + span)}" fill="{c_core}" '
                     f'stroke="{INK}" stroke-width="2"/>')
        parts.append(radial_label(family, 122, a0 + span / 2, 20, INK, "600"))

        for mi, (middle, outers) in enumerate(middles):
            m_span = span / len(middles)
            m0 = a0 + mi * m_span
            parts.append(f'<path d="{wedge(R1, R2, m0, m0 + m_span)}" fill="{c_mid}" '
                         f'stroke="{INK}" stroke-width="1.5"/>')
            parts.append(radial_label(middle, (R1 + R2) / 2, m0 + m_span / 2, 17, INK, "500"))

            for oi, outer in enumerate(outers):
                o_span = m_span / len(outers)
                o0 = m0 + oi * o_span
                parts.append(f'<path d="{wedge(R2, R3, o0, o0 + o_span)}" fill="{c_out}" '
                             f'stroke="{INK}" stroke-width="1"/>')
                parts.append(radial_label(outer, (R2 + R3) / 2, o0 + o_span / 2, 14, INK, "400"))

    # hub
    parts.append(f'<circle cx="{C}" cy="{C}" r="52" fill="#160A33" stroke="{PAPER}" '
                 f'stroke-opacity="0.25" stroke-width="1.5"/>')
    parts.append(f'<text x="{C}" y="{C - 9}" text-anchor="middle" font-size="15" '
                 f'fill="{PAPER}" font-family="Fraunces, Georgia, serif" '
                 f'font-style="italic">the</text>')
    parts.append(f'<text x="{C}" y="{C + 13}" text-anchor="middle" font-size="17" '
                 f'fill="#E8CBA0" font-family="Fraunces, Georgia, serif" '
                 f'font-style="italic">wheel</text>')
    parts.append(f'<text x="{C}" y="{SIZE - 16}" text-anchor="middle" font-size="13" '
                 f'fill="{PAPER}" fill-opacity="0.5" '
                 f'font-family="Outfit, Segoe UI, sans-serif">thechampagnemethod.co</text>')
    parts.append('</svg>')
    return "\n".join(parts)


if __name__ == "__main__":
    OUT.parent.mkdir(parents=True, exist_ok=True)
    svg = build()
    OUT.write_text(svg, encoding="utf-8")
    words = sum(1 + len(m) * 3 for _, _, m in [(f, b, ms) for f, b, ms in FAMILIES])
    print(f"wrote {OUT}  ({len(svg):,} bytes)")
    print(f"families={len(FAMILIES)}  "
          f"middle={sum(len(m) for _, _, m in FAMILIES)}  "
          f"outer={sum(len(o) for _, _, ms in FAMILIES for _, o in ms)}")
