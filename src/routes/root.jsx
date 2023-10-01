export default function Root() {
  return (
    <>
      <div
        id="sidebar"
        className="w-[22rem] h-screen bg-slate-400 flex flex-col p-8 justify-around text-2xl"
      >
        <h1 className="text-6xl">Goal Router</h1>
        <div className="space-y-8">
          <form id="search-form" role="search">
            <input
              className="p-4 -mx-4s"
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post" className="py-4">
            <button className="" type="submit">
              New
            </button>
          </form>
        </div>
        <nav>
          <ul className="space-y-8">
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
