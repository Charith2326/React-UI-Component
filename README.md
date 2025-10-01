**Project :** **React Component Development**

**Tech Stack :** React · TypeScript · TailwindCSS · Storybook

**Task :**

Built two React components using React, TypeScript and modern patterns.

And documented them using Storybook.


📘 **Description of My Approach**

**1. Project Setup**

Bootstrapped the project using **Vite + React + TypeScript** for faster development.

Configured **TailwindCSS** for utility-first styling and responsiveness.

Integrated **Storybook** to document components and showcase different states/variants interactively.

Added **Jest + React Testing Library** for basic unit tests.

**2. Component 1: InputField**

Created a **reusable input component** with props for **value, label, helper text, error message, and variants**.

Implemented **variants**: **filled**, **outlined**, **ghost** with Tailwind classes.

Added **sizes**: **sm**, **md**, **lg** by adjusting padding, font size, and spacing.

**States implemented:**

**Disabled** → grayed-out styling and non-editable.

**Invalid** → red border + error message.

**Loading** → shows a spinner inside the input.

**Optional features:**

**Clear button** → resets input value.

**Password toggle** → shows/hides password.

**Accessibility:**

Added **aria-invalid**, **aria-describedby**, and proper **label associations**.

**3. Component 2: DataTable**

Built a **generic table component** with **TypeScript generics** (DataTableProps<T>).

Props accept **data** and **columns** so it works with any dataset.

**Features implemented:**

**Column sorting** → toggles ascending/descending.

**Row selection** → checkbox for single/multiple row selection.

**Loading state** → skeleton rows or spinner overlay.

**Empty state** → friendly message when no data.

**Additional details:**

Added **callbacks** (onRowSelect) for parent components to handle selections.

**Responsive layout** → table collapses nicely on smaller screens.

**Accessibility** → added **role="table"**, **aria-sort**, and **keyboard-focusable checkboxes**.

**4. Documentation**

Each component documented in **Storybook** with:

**Controls** for changing props.

**Different states/variants** shown.

**5. Testing**

Added **unit tests** for:

**InputField** rendering (label, placeholder, error states).

**DataTable** sorting logic and row selection.

Used **Jest + React Testing Library** to ensure reliability.
Used Jest + RTL to ensure components work as expected.

**⚙️ Setup Instructions**
# Clone the repository
git clone : https://github.com/Charith2326/React-UI-Component/

# Navigate into the project folder
cd react-com-ui

# Install dependencies
npm install

# Run development server
npm run dev

# Run Storybook for component documentation
npm run storybook

# Run tests
npm run test


**Screenshots of the project deployed :**

<img width="1900" height="877" alt="image" src="https://github.com/user-attachments/assets/03aaec14-2f95-4c39-b5f8-4fe711f23fc3" />


<img width="1887" height="903" alt="image" src="https://github.com/user-attachments/assets/8ba9ec5c-17d3-4def-97a3-01ac1d9042d0" />


<img width="1903" height="900" alt="image" src="https://github.com/user-attachments/assets/14944006-2238-4ac0-aa3c-551ae875a5fb" />


<img width="1902" height="900" alt="image" src="https://github.com/user-attachments/assets/b5d417fc-c29a-46c4-9e4b-1b7512bdb6af" />


<img width="1900" height="883" alt="image" src="https://github.com/user-attachments/assets/00eea460-464d-4695-95ca-9a6d20c52889" />

