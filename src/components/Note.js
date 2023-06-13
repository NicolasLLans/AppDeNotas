export const Note = ({ content, body }) => {
      return <li>
        <p>{content}</p>
        <small>
          <time>{body}</time>
        </small>
      </li>
    }