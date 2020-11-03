declare let link:HTMLAnchorElement

const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');

const listeners = new WeakMap<HTMLAnchorElement, (e: MouseEvent) => void>();

links.forEach((link) => {
  listeners.set(link, (e: MouseEvent) => {
    console.log(e);
  });

  link.addEventListener('click', listeners.get(link));
});

listeners.get(link); // Function

link = null;

listeners.get(link); // undefined
