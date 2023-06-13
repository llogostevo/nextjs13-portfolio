-- Create a table to store the projects
create table
  projects (
    id integer primary key generated always as identity,
    title text,
    description text,
    live_view_link text,
    github_link text
  );

-- Insert the data into the projects table
insert into
  projects (
    title,
    description,
    live_view_link,
    github_link
  )
values
  (
    'Portfolio',
    'Creation of this portfolio using HTML, CSS, Node.js, Express.js, Mustache, Nodemailer, Vercel ',
    'https://portfolio-ochre-beta-50.vercel.app/',
    'https://github.com/llogostevo/portfolio'
  ),
  (
    'Portfolio Mockup',
    'Creation of a non responsive HTML & CSS portfolio home page based upon a figma design',
    'https://portfolio-practice-five.vercel.app/',
    'https://github.com/llogostevo/portfolio-practice'
  ),
  (
    'Responsive',
    'Use of Flexbox and media queries to create a repsonsive design from a figma file using HTML and CSS',
    'https://responsive-practice-bay.vercel.app/',
    'https://github.com/llogostevo/responsive-practice'
  ),
  (
    'Scientific Calculator',
    'Scientfic calculator modelled on the Google calculator using HTML, CSS, Vanilla Javascript and Bootstrap',
    'https://scientific-calcullator.vercel.app/',
    'https://github.com/llogostevo/scientific-calcullator'
  ),
  (
    'React and React Routes',
    'Completed a tutorial to learn basics of React and react routes',
    'https://e-commerce-practice-two.vercel.app/',
    'https://github.com/llogostevo/eCommercePractice'
  ),
  (
    'NextJS 13, TypeScript and Tailwind',
    'Completed a tutorial to learn basics of Next 13',
    'https://next-js-wiki-search.vercel.app/',
    'https://github.com/llogostevo/nextJSWikiSearch'
  );