export const Note = ({ content, importante }) => {
      return <li>
        <p>{content}</p>
        <small>
          <time>{importante}</time>
        </small>
      </li>
    }