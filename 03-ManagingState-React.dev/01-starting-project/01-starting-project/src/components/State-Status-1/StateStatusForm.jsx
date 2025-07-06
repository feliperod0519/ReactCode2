import { useState } from "react";

export default function StateStatusForm(){

    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    function submitForm(answer){
        // Pretend it's hitting the network.
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (answer.toLowerCase() != 'lima'){
                    reject(new Error('Good guess but a wrong answer. Try again!'))
                }
                else{
                    resolve();
                }
            },2000)
        });
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } 
        catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water? {status}
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
} 