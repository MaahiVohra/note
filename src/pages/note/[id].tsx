import { useRouter } from "next/router";
import type { Note, Tag } from ".././app";
import ReactMarkdown from "react-markdown";
import { Head } from "next/document";
import Link from "next/link";

type NoteListProps = {
  availableTags: Tag[];
  notes: Note[];
  onDeleteNote: () => void;
};
const NotePage = ({ notes, onDeleteNote }: NoteListProps) => {
  const router = useRouter();
  const { id } = router.query;
  const currentNote = notes.find((note) => {
    return note.id === id;
  });
  if (!currentNote) return null;
  return (
    <>
      <header className="m-5 flex justify-between">
        <h1 className="m-5 text-3xl font-medium leading-6 text-gray-900">
          {currentNote.title}
        </h1>
        <nav>
          <Link
            href={`/edit/${id}`}
            className="mr-2 inline-flex justify-center rounded-md border border-transparent  bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            Edit
          </Link>
          <Link
            onClick={onDeleteNote}
            href={`/`}
            className="my-5 inline-flex justify-center rounded-md border border-red-500 py-2  px-4 text-sm font-medium text-red-500 shadow-sm hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            Delete
          </Link>
          <Link
            href={`..`}
            className=" ml-2 rounded-md border border-gray-300 py-2 px-4 font-medium text-gray-400 hover:bg-gray-300 hover:text-white"
          >
            Back
          </Link>
        </nav>
      </header>
      <div className="prose m-10 max-w-none lg:prose-xl">
        <ReactMarkdown>{currentNote.markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default NotePage;
