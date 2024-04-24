import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/compoenents/ui/accordion";
import { useRef } from "react";

function App() {
  const prevIndex = useRef(0);

  function handleClick(evt?: React.MouseEvent<HTMLElement, MouseEvent>) {
    console.log(evt);
  }

  const handleAccordionClick =
    (fn: (evt?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) =>
    (evt?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!evt) return;
      const clickedElement = evt.target as HTMLElement;
      const parentElement = evt?.currentTarget; // The parent element

      const closestChild =
        clickedElement.closest<HTMLElement>("#parent > *") || clickedElement;

      const children = Array.from(parentElement.children);

      console.log(parentElement, children);

      // Find the index of the clicked child
      const currentIndex = children.indexOf(closestChild);
      console.log(currentIndex);
      if (currentIndex <= prevIndex.current) {
        return fn(evt);
      }

      const prevContentHeight =
        parentElement.children.item(prevIndex.current)?.clientHeight || 0;
      const selectedOffset = closestChild.offsetTop;

      console.log(selectedOffset - prevContentHeight + 52, selectedOffset);

      console.log(evt?.currentTarget.children.item(0)?.getBoundingClientRect());

      scrollTo({
        top: 1001,
        behavior: "smooth",
      });
      fn(evt);
    };

  return (
    <>
      <div id="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est
        suscipit provident repudiandae ab sequi quas corporis, cumque nulla
        iste? Laboriosam architecto neque incidunt repellendus nihil nulla quas
        natus molestiae. Earum impedit tenetur tempore quaerat nihil minus ab
        saepe officiis aliquam omnis minima cumque vero, voluptas velit ex quae
        incidunt sapiente perferendis eveniet dignissimos adipisci ratione
        consectetur non! Amet, eveniet! Dolore repellendus officia
        exercitationem, atque quidem eligendi, doloribus quis laborum laudantium
        doloremque ipsum odit cumque tenetur iusto magni similique esse odio
        aperiam molestias deleniti eveniet. Earum, inventore. Sint, aperiam aut.
        Expedita, ullam ipsum inventore doloribus vitae blanditiis dolore? Illum
        nam similique, consequatur accusantium suscipit ratione eligendi beatae
        corrupti deserunt neque cupiditate molestias soluta sunt laborum? Iure
        illum ab esse quas! A officiis rerum placeat dolorum optio commodi vel
        perspiciatis recusandae sunt distinctio similique, nobis fugit ex
        exercitationem, quasi delectus unde magni quaerat quibusdam quisquam
        explicabo eum. Accusamus deleniti incidunt eligendi?
      </div>
      <Accordion
        type="single"
        collapsible
        onClick={handleAccordionClick(handleClick)}
        className="grid gap-9"
        id="parent"
      >
        <AccordionItem value="item-1" id="trigger-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quaerat architecto similique, vero consectetur nesciunt fuga impedit
            amet, ut atque non voluptatibus molestiae? Ullam dolorem laboriosam
            sapiente a sequi architecto. Iusto, numquam dolore animi aut rerum
            voluptates, dolor temporibus harum incidunt repudiandae nam
            accusantium corrupti minima. Quos sequi accusamus est odit
            voluptatem! Voluptatibus reiciendis assumenda, modi cumque aut
            accusantium totam? Molestiae delectus nisi esse dolorem quisquam
            fugiat suscipit a quas repellat tempora repellendus quod ex, maxime,
            dolores consequatur dolorum nihil et explicabo enim dicta laudantium
            labore. Amet delectus consequatur veritatis! Voluptatem architecto,
            ipsa sunt quod hic impedit nesciunt voluptates enim expedita, atque,
            quia temporibus quibusdam numquam. Recusandae, illum dignissimos
            ipsum possimus neque in, culpa facere natus debitis, maxime est
            voluptate. Perspiciatis sunt repudiandae nihil tempore est commodi
            quod. Dignissimos, iusto nemo, expedita alias eos saepe quidem culpa
            necessitatibus a tenetur et ut est, quam enim qui! Ab labore
            voluptatem cumque? Deserunt adipisci, quis qui quam soluta molestiae
            debitis dolores modi repudiandae voluptate molestias magni sed ullam
            quasi quos consequuntur cum ipsa recusandae facere labore, obcaecati
            totam atque! Ut, magni pariatur. Iure accusamus esse iusto quas odio
            corporis ab minus et, nemo distinctio nostrum rem atque facilis,
            magnam at. Cupiditate beatae repudiandae molestias odit consectetur
            at totam similique, minus dolores nobis. Magnam perspiciatis quos
            voluptates consectetur expedita, deserunt reprehenderit dolores,
            quam doloremque vero consequuntur hic recusandae quidem libero,
            necessitatibus a excepturi possimus error maiores dolorum dicta!
            Molestias sit eveniet laboriosam obcaecati. Natus alias sint, sunt
            ut reiciendis eius incidunt delectus culpa sed molestiae voluptatem
            sit omnis voluptas blanditiis quisquam deleniti praesentium. Libero
            voluptatem quas aliquam fugiat beatae quos animi, a obcaecati. Earum
            dignissimos possimus, libero eveniet laboriosam eum praesentium,
            velit ab quos beatae vel! Voluptatem, dolorem fugiat. Libero,
            aliquam corrupti quibusdam assumenda natus qui omnis cupiditate
            voluptatibus. Ducimus eveniet possimus ex.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger id="trigger-2">Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quaerat architecto similique, vero consectetur nesciunt fuga impedit
            amet, ut atque non voluptatibus molestiae? Ullam dolorem laboriosam
            sapiente a sequi architecto. Iusto, numquam dolore animi aut rerum
            voluptates, dolor temporibus harum incidunt repudiandae nam
            accusantium corrupti minima. Quos sequi accusamus est odit
            voluptatem! Voluptatibus reiciendis assumenda, modi cumque aut
            accusantium totam? Molestiae delectus nisi esse dolorem quisquam
            fugiat suscipit a quas repellat tempora repellendus quod ex, maxime,
            dolores consequatur dolorum nihil et explicabo enim dicta laudantium
            labore. Amet delectus consequatur veritatis! Voluptatem architecto,
            ipsa sunt quod hic impedit nesciunt voluptates enim expedita, atque,
            quia temporibus quibusdam numquam. Recusandae, illum dignissimos
            ipsum possimus neque in, culpa facere natus debitis, maxime est
            voluptate. Perspiciatis sunt repudiandae nihil tempore est commodi
            quod. Dignissimos, iusto nemo, expedita alias eos saepe quidem culpa
            necessitatibus a tenetur et ut est, quam enim qui! Ab labore
            voluptatem cumque? Deserunt adipisci, quis qui quam soluta molestiae
            debitis dolores modi repudiandae voluptate molestias magni sed ullam
            quasi quos consequuntur cum ipsa recusandae facere labore, obcaecati
            totam atque! Ut, magni pariatur. Iure accusamus esse iusto quas odio
            corporis ab minus et, nemo distinctio nostrum rem atque facilis,
            magnam at. Cupiditate beatae repudiandae molestias odit consectetur
            at totam similique, minus dolores nobis. Magnam perspiciatis quos
            voluptates consectetur expedita, deserunt reprehenderit dolores,
            quam doloremque vero consequuntur hic recusandae quidem libero,
            necessitatibus a excepturi possimus error maiores dolorum dicta!
            Molestias sit eveniet laboriosam obcaecati. Natus alias sint, sunt
            ut reiciendis eius incidunt delectus culpa sed molestiae voluptatem
            sit omnis voluptas blanditiis quisquam deleniti praesentium. Libero
            voluptatem quas aliquam fugiat beatae quos animi, a obcaecati. Earum
            dignissimos possimus, libero eveniet laboriosam eum praesentium,
            velit ab quos beatae vel! Voluptatem, dolorem fugiat. Libero,
            aliquam corrupti quibusdam assumenda natus qui omnis cupiditate
            voluptatibus. Ducimus eveniet possimus ex.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
