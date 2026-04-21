export default function AboutPage() {
  return (
    <div className="container">
      <h1>About page</h1>
      <div className="struggles">
        <h2>STRUGGLES</h2>
        <h3>Cart Page</h3>
        <p>
          The cart page was difficult for me. I think i am good at styling
          However when it comes to styling things with more complexity like
          divs, containers, sections, ids, i get lost with what needs a display
          flex, flex direction, width, etc. This ties into organizing which i
          will touch on later. Another thing that i struggle with is styling
          when containers are side by side. You'll notice on the cart page i
          have the products on the left that wrap when the container gets full
          and the checkout section on the right. Naturally i defualt to styling
          in sections that scale the page in columns. That's something i need to
          work on
        </p>
        <h3>Quantity</h3>
        <p>
          The Quantity section of the cart page was also difficult for me to
          understand. Quantity wasn't a field already stored in the data so it
          needed to be added through mapping. When it comes to fetching data,
          displaying, and accessing data, that comes fairly simply but as we add
          onto it with mapping and adding different props that tends to be a
          little confusing. I already have looked up free API's that i plan to
          use for some personal practice projects.
        </p>
        <h3>Files/Organization</h3>
        <p>
          Organization and keeping code clean with different files is something
          that isn't the most confusing to me but its hard to keep the
          dicispline when you go through a project and the logic increases,
          imports increase, and sections within the code increase. Through
          personal projects as mentioned above i plan on trying to keep dry code
          using mixins, global styles page, sections, etc, to help me get in the
          habit of professional code
        </p>
      </div>
      <div className="strengths">
        <h2>STRENGTHS</h2>
        <h3>Styling</h3>
        <p>
          As of right now im very elementary with styling but i enjoy it. I
          enjoy spending the time to find cool colors that go together with
          specific layouts. One section that i really like is my cart page. I
          like how clean it looks before anything is added to the cart and when
          products are in the cart the garient in the product container is a
          cool styling attribute. Fonts, gradients, background images, and
          sizing of different contents, are all very enjoyable to me and there's
          so much you can do.
        </p>
        <h3>Hover effects</h3>
        <p>
          This ties into styling aswell but specifically the hover effects. I
          love diving into the user experience side of a website. There's a tie
          into the psychology of what makes people engaged within a website and
          what prevents them from leaving. I personally like websites with hover
          effects like box shadows, color changes when hovering, zoom effects,
          fades, etc.
        </p>
        <h3>Fetching Data</h3>
        <p>
          One thing i thought was really cool throughout this part of the course
          was when we learned how to fetch and display data. We used the Star
          wars API a lot and were able to chose what data is being displayed and
          from there turning names into links that send you to a specific
          characters detail page.
        </p>
      </div>
      <div className="overall">
        <h2>OVERALL</h2>
        <p>
          Overall the frontend course was very difficult and frusterating but i
          enjoyed spending the time learning how to combine CSS, SCSS, HTML, and
          Javascript, into React. Before this program when i would visit sites i
          would notice things like hover effects, how the url changes when you
          click a link to a different page, the footer being on every page,
          sections of the page that stay in view as you scroll, etc. Now after
          taking this course i can pinpoint what is happening and get an
          understanding of how they are doing it.
        </p>
      </div>
    </div>
  );
}
