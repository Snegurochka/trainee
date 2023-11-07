import { QuestionsList } from "../modules/Questions/components/QuestionsList"
import { questionsCount } from "../modules/Questions/services/questions-selector"

export const QuestionsPage = () => {
  return (
    <section>
        <h1>Questions</h1>
        <div>Total: {questionsCount}</div>
        <QuestionsList />
    </section>
  )
}
