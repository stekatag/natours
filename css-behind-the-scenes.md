# How CSS Works: A Look Behind the Scenes

## Three Pillars of Writing Good HTML and CSS - Never Forget Them!

- Responsive Design

  - Fluid Layouts
  - Media queries
  - Responsive Images
  - Correct units
  - Desktop-first vs. mobile-first

- Maintainable and scalable code

  - Clean
  - Easy-to-understand
  - Growth
  - Reusable
  - How to organize files
  - How to name classes
  - How to structure HTML

- Web Performance
  - Less HTTP requests
  - Less code
  - Compress code
  - Use a CSS preprocessor
  - Less images
  - Compress images

## Quick Review: CSS Terminology

A CSS Rule

```css
.my-class /* selector */ {
  /* declaration block */
  color: red;
  text-align: center;
  font-size: 2rem; /* declaration */
}
/* property: declared value; */
```

## The Cascade (The "C" in CSS)

Cascade is a process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.

Importance (weight) > Specificity > Source Order

## Cascade and Specificity: What you need to know

- CSS declarations marked with `!important` have the highest priority and will always win over other declarations.
- But only use `!important` as a last resort. It's better to use correct specificities - **more maintainable code**
- Inline styles will always have priority over styles in external stylesheets
- A selector that contains **1** ID is more specific than one with **1000** classes
- A selector that contains **1** class is more specific than one with **1000** elements
- The universal selector `*` has no specificity value (0,0,0,0)
- Rely more on **specificity** than on the **order** of selectors;
- But, rely on order when using 3rd-party stylesheets (e.g. normalize.css) - always put your author stylesheets last

## CSS Value Processing: What you need to know

- Each property has an initial value, used if nothing is declared (and if there is no inheritance — see next lecture);
- Browsers specify a **root** `font-size` for each page (usually 16px);
- Percentages and relative values are always converted to pixels;
- Percentages are measured relative to their parent’s `font-size`, if used to specify `font-size`;
- Percentages are measured relative to their parent’s `width`, if used to specify lengths;
- `em` are measured relative to their **parent** `font-size`, if used to specify `font-size`;
- `em` are measured relative to the **current** `font-size`, if used to specify lengths;
- `rem` are always measured relative to the **document’s root** `font-size`;
- `vh` and `vw` are simply percentage measurements of the viewport’s `height` and `width`.

## Inheritance: What you need to know

- Inheritance passes the values for some specific properties from parents to children — **more maintainable code**;
- Properties related to text are inherited: `font-family`, `font-size`, `color`, etc;
- The computed value of a property is what gets inherited, **not** the declared value.
- Inheritance of a property only works if no one declares a value for that property;
- The `inherit` keyword forces inheritance on a certain property;
- The `initial` keyword resets a property to its initial value.

## The Visual Formatting Model

The **Visual Formatting Model** is an algorithm that calculates boxes and determines the layout of these boxes, for each element in the render tree, in order to determine the final layout of the page.

1. **Dimensions of boxes:** the box model
2. **Box type:** inline, block and inline-block
3. **Positioning scheme:** floats and positioning
4. **Stacking context**
5. Other elements in the render tree
6. Viewport size, dimensions of images, etc.

### 1. The Box Model

![box-model](https://i.imgur.com/snEDQjF.png)

- **total width** = right border + right padding + specified width + left padding + left border
- **total height** = top border + top padding + specified height + bottom padding + bottom border\
  **Example:** height = 0 + 20px + 100px + 20px + 0 = 140px

### 2. Box Types: Inline, Block and Inline-Block

|             Block-level boxes             |      Inline-block boxes       |                                    Inline boxes                                    |
| :---------------------------------------: | :---------------------------: | :--------------------------------------------------------------------------------: |
|   Elements formatted visually as block    |   A mix of block and inline   |                          Content is distributed in lines                           |
|          100% of parent's width           | Occupies only content's space |                           Occupies only content's space                            |
|       Vertically, one after another       |        No line-breaks         |                                   No-line breaks                                   |
|        Box-model applies as showed        |  Box-model applies as showed  | - No heights and widths.<br> Paddings and margins only horizontal (left and right) |
| `display: block (flex, list-item, table)` |    `display: inline-block`    |                                 `display: inline`                                  |

### 3. Positioning Scheme: Normal Flow, Absolute Positioning and Floats

|            Normal flow (default)            |                            Floats                             |                                        Absolute positioning                                         |
| :-----------------------------------------: | :-----------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
|         Default positioning scheme          |          **Element is removed from the normal flow**          |                             **Element is removed from the normal flow**                             |
|  **NOT** floated or absolutely positioned   | Text and inline elements will wrap around the floated element |                                  No impact on surrounding elements                                  |
| Elements laid out according to their source |    The container will not adjust its height to the element    | We use `top, bottom, left and right` to offset the element from its relatively positioned container |
|       **Default** `position relative`       |                `float: left` or `float: right`                |                              `position: absolute` or `position: fixed`                              |

### 4. Stacking Context

![stacking-context](https://i.imgur.com/e2TxeuQ.png)
