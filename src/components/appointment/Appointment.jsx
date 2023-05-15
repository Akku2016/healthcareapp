import './appointment.css';

export default function Appointment() {
  return (
    <section class="appointment" id="appointment">

    <h1 class="heading"> <span>appointment now</span>  </h1>    

    <div class="row">

        <div class="image">
            <img src="image/appointment-img.svg" alt=""/>
        </div>

        <form   method="post">
        
      
            <h3>make appointment</h3>
            <input type="text"name="name" placeholder="your name" class="box"/>
            <input type="number"name="number" placeholder="your number" class="box"/>
            <input type="email"name="email" placeholder="your email" class="box"/>
            <input type="date"name="date" class="box"/>
            <input type="submit" name="submit" value="appointment now" class="btn"/>
        </form>

    </div>

</section>
  )
}
