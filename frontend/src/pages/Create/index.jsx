import { addPlace } from "../../api";
import Container from "../../components/Container";
import { inputs } from "../../constants";
import InputField from "./InputField";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  // post isteği için mutasyon
  const mutation = useMutation({
    mutationKey: ["add"],
    // api isteği atacak fonksiyon
    mutationFn: (data) => addPlace(data),
    
    onSuccess: () => {
      toast.success("Konaklama Oluşturuldu");
      navigate("/");
    },
    
    onError: () => {
      toast.error("İşlem Başarısız oldu");
    },
  });

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = new FormData(e.target);
    let data = Object.fromEntries(form.entries());
  
    // Dizi ve boolean işlemleri
    data.amenities = data.amenities.split(",");
    data.availability = Boolean(data.availability);
  
    // Veri tipi dönüşümleri
    data.price_per_night = Number(data.price_per_night);
    data.rating = Number(data.rating);
  
    // Doğru alan isimlerini kullanın
    data.name = data.title;
    delete data.title;
  
    console.log(data);
  
    mutation.mutate(data);
  };
  

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-5"
      >
        {inputs.map((props, key) => (
          <InputField key={key} {...props} />
        ))}

        <button
          disabled={mutation.isPending}
          className="mt-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md transition hover:bg-blue-600 disabled:bg-blue-300"
        >
          Oluştur
        </button>
      </form>
    </Container>
  );
};

export default Create;