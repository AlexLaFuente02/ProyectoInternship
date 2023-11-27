<template>
   <div class="student__principalPage">
            <div class="student__profile">
                <div class="profile__content__header">
                        <div class="content__welcome">
                          
                            <div class="student__data">
                                <span class="welcome__student">
                                  ¡Bienvenido a la plataforma !
                                </span>
                                <br>
                                <span class="career__student">
                                  En esta plataforma administrar las empresas y pasantias que tenemos.
            
                                </span>
                                <span class="career__student">
                                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATERUREBIVFhUWGBgZGBcXGRUXIBgeFRcXFhcYFxgYHSggGiAmIBYXITEhJSkrLy4wFx8zODMwNygtLi0BCgoKDg0OGxAQGy4mICUwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQYHAQIEAwj/xABIEAACAQMCAwQFCAULAwUBAAABAgMABBEFEgYhMQcTQVEiYXGBkRQyNDVzobGyIzNCUnIVYnSCkrO0wcLR4SRToiVj0vDxF//EABsBAAMBAQEBAQAAAAAAAAAAAAABAwIFBAYH/8QANhEAAgECBAMECQMEAwAAAAAAAAECAxEEEiExE0FRIoGh0QUyM2FxscHh8BSR8RYjNFIVJEL/2gAMAwEAAhEDEQA/ALW4VlZoXLsWInuRkknks8gA5+AAA91O6Q8HfqH/AKRdf4iSn1OW7Mx2QVEuNeNYbABNpkncZWMHHLoGY+Azy8zUsNUfpH/V8RMZvSCzSEA/+wCEHu2g1SjBSbctkrk603FJLd6E3sDr8y96z2tuG5iNkdyAem7B5V6cOavqDajJa3oiXZBvAj5hj3gXeCeYyMjafKpqK8+5Xdv2jdjG7AzjrjPXFZc07qyNZGrWbPSqzsuP3fWTbbh8mLGJOQ+eBjdu682BX3ipdxtrBtbKWVechASMDqXkO1cfHPuqruPeEzZWlncR/rI8LKw/fJ71XJ8fS3D4VWhCL9bnoviTrykvV5assntB1G4gsmltm2yb4wDjd85wDyIqPcRa1rtnA1xN8jKKVBCiQn0jgcjipnw3qq3VrFcL+2gJHkejD3EGo92v/Vcv8cf5xWaXrKDXM1P1XNPkLeHta128gFxD8jCMWADCQH0SQeQz5VIOC9WlfTxcXjjcDNvYgKAI5HGfYAtcPZB9Vxfxy/3jVzdst40enbF5d7IqNjyGXI9+0VqSUqnDS5mYtqCm3yFx4nu9Un7rTYwkURDGeRpFB8sqhGQcclOfXiujVOKdS06RDqEcU0DnAlhBQg9cFW8fV4460y7IbJE0yNwOcrO7HzIcoPuQUz7QLJZdOuVYD0Y2cZ8GQbgfuobgp5babe/4iSlkzX13G+nX8c8SzQsGRxlT/v5eyq44g4v1S2vorItbMZTGA4jcAd6+wZG/njrW3YZes0FxASdqOrL6u8ByB71z76Vdon1/afxWn9+a1Cmo1ZQetr/IU6jlTUl1RbWnrMI1FwyNJz3FAVU8zjAJJHLHjUf481O9tYGubZodkYG5HRmLFmAGCGAHWpXUT7VPqq4/qf3i1CnrNfEtU0gzn7Pdavr2P5TO0Iiy67ERg25SMHcWIx15Yrt404xh0+MFxvlbOyMHGceLHwHrpZ2MfVo+1k/EVCLk/K+Iwk3NVmKAHpiBWYD3lM++rKnGVWSeyv4EeJKNONt2TbS5tfuVExNrbK3NUdHdsHpu58v/ALyrfRNX1L+UxZ3vdBfk7yAxdJMSKofnzXqRipwK8zCu7ftG4DG7AzjrjPXFRc1roi2Rrmz0qs7rtAddaFqGHyYMIW5D555bs9eTELj21NuKdXFpaS3B6op2jzY8lHxIqp+MuEmg0u1ucfplO6dvHM535J/mtge+q0Ixb7XPRE68pJdnlqy7hWaRcGax8rsoZ8+kVw/8aei/3jPvp7UGmnZl001dBSniiRlsrhlJDCJyCDgghTggjpTalHFv0G5+xk/KaFuglszp3HzNFa0VqyJnDwd+of8ApF1/iJKfUh4O/UP/AEi6/wARJT6lLdm4bIwapLiuzm0zVlvlQmF5O8yOnp8pYyfA8yR7R66u6ue8s45UMcqK6N1VgCD7jWqVTI9rp6MzVp5170c+larBcxiWCRXUjwI5eph1B9Rrkt9fR757JQCUiEhcMDjLbdhA6HnmlEvZpphYsqSR56iOV1HwzTbSOFbK2DCCEKXUqzZYswPUFic0moLZsFne6RGuKrX+UNQjsN7LFboZpmQ4IdhiIA+B5595rOq9m8TwyKt1eO20lRJMXXcBldykcxnFP7Lg2xikE0cbBwQd3eSnJXpuy3pe/NN720SWNo5MlWGDglT7iuCPdW+I1bK9EZ4V7uS1ZWfYnq5AmsZOTIe8QHwz6Mi+4gH+sakPa/8AVcn8cf5xTC04H06KRZo4SrqdwYPJnOc8/S58/OunVuFbO5YvcRlycZG+QDl09ENj7qcqkXVzmVTnw8jEvZB9Vxfxy/3jV3doWhNeWMkUf6xSHQeZT9n3jI99dmk8K2ds4e3jKEZwN8hHpdfRLY+6neKxKfbzx63KRh2Mj6WKy7H9eXuW0+Y7JYmYqreiSrHJGD4hs5HkRTHtX4ijhs3tlYGacbAo5kKfnMQOnLkPPNPdb4Psbpt80I7z/uISjf2l6++vLSOCLC3fvUi3SDo8jNIR7C3St56bln1629/x+xNQqKGTT4izsp4fe0sy0w2yTEOVPVVAwgPrxk++oj2iH/1+0/itf781chWoxPwBpjtueAsfNpJSfiWohVWdzlzv4jnS7CjHkONW1eG3hknkb0Y1LNtwTgeQ8aj3aVMH0eZ16MsbDPkXQivduzvSj1t//OT/AOVd+p8L2k4VZoyyooRRvkAwOgIBwffWIuEZJ9PzqakpyTX58iP9jH1aPtZPxFRHtB06aw1NNSiUmNnV8joG6OjHw3DOPaas7RuF7O1bdbxlDgjG+Qjngn0S2M8hzxTa5t0kUpIoZTyKsAQfaDW+Mo1HJap8jHBbpqPNczh0PW7e6iWWCQMCOYyMqfEMOoIrnPEKfL1sVAZjE0pYMDt2sF2lfM5zSubs20wsWWN489RHI6D4A0z0XhSytSWt4QrkYLkszEHqNzHPhWGqfK5RcTnYj/GkPy69t9MDMI1BuJyvIgD0YwDjkck/dW152bwvGyG7vWyDyeYsufDKkcxnFOIOC7BJBKsbB8g7u9lydpyM+lzHqNPLq3WRGjfO1gQcEjkeuCOYpuo0koszw07uSKp7GdSaKa40+bk2SyjyZDskA+APuNW5UZt+BNNSQSpAQ4O4N3kuc9ck7uf+dSeitOM5ZkOjCUI5WFKOLfoNz9jJ+U03pRxb9BufsZPymprdFJbM96KKK0TOHg79Q/8ASLr/ABElPqQ8HfqH/pF1/iJKfUpbs3DZBUfueJ0S5Np3M7S7O8AVUOU3FdwJYcsjHnT81A9TaYa8vcIjN8g6SMyDHfvnmqsc9PCiKT3Cba2JRomtw3Ifu9waNtkiONrI3kw/z8aaE1DODDtu71ZwVu3aN5FHNNgUrGYm6sOoJIBz4V3dos0iaZdNHkN3eMjwBYBv/Emm4dvKvcZUnluzdeK433GCCedFJBkiQFcrybaWYF8fzQelNNK1OG4jEsDBlOR4ggjkVYHmCPI1poMUaWsCRY2CJNuPLaOf+dRvhgldX1KNP1f6ByB0EjIN3vPU0WTTty8wu01fn5Esvrnu42kKswUZIXGcDrjJFc2haul1Cs8auqNzUuANw8wATy9tdOp/qZf4H/KaR9m/1XafZj8TSsst/eau81iTUjs+IUkuXtBFKJIwC+QuFDAlTkN448Kd1DtE+utQ+ytvymiKTT+ApNpr4ksuJSqlgrNgfNXGT7MkClnD2vR3kfewo4TJALgDJBIYYBJGCPHFOKgem3SWF/eQSHbDKhu4/IYyJ1HvAOKIq6fUJSytdCU2WrrLNLCsbgxHDMQu3JAIAIJOSDnpXtq2orBE0zKzKgJbYASAASTgkdMVx8KWrpbh5RiWYmaT1NKd23+qNq/1a24v+gXX2Ev5DRZZrBd5bnRpGpLcRLMiuquAV3gAkEAg4BPI5phSTgv6vtPsI/yivbiPU/k1tLPjLKvoL13MfRRQPHLECk12rIafZuzGla5DcS3EMZ9K3cI/TnkZyPVkMPapptVYafNDZ3tm0ZcrLGbe4Zo5E3SE70kJdQCSxce+rPrdSOV6bGacsy1EupcRQ280UMwde9bYkhA2FiM7S2cg+HMV76xqy26qzRuwZlT0ApwzsEUHJHUsBSnjHS4rqS2t5RlXMw9YPcsQw8iDgio//KsoiGn3h/6mC5tMN/3o/lEeyUevwPrFOME0vEUptN+HkWLG2QDgjI6HqPUcV46heJDE80hwqKWb2KM101FeMbxN9vavu2O/eS7Vd/0cOCFIQH5z7Bz8A1Tirs3J2Vx7o2opcwR3EfzZFDDPUZ8D6x091d1Qbs9vESW6sV3bI5DLDuVk/RzHcQAwB9FiR76nNOccsrBCWZXClHFv0G5+xk/Kab0o4t+g3P2Mn5TSW6HLZnvRWaK0YODg79Q/9Iuv8RJT6kPB36h/6Rdf4iSn1KW7NQ2Rg1GLrh+4N/8ALo5ogRD3IVo2Ybd5fJIcZOTUoopJ2G4p7kf0XQXinlu55e9mlCrkLsVETOFVcnzzkmnNxAroyOAysCCD4gjBBr3oobbdwSSViLWWh3tunc2tzH3I5IJkZ2iHgoYMN4HhupjoGiJaowDM8kjF5ZG+dIx8T5DwAHSnFFNybEopHHqMDvE6RsqswIywLAZ5HkCPxqP6dw/eQWi2cdzEFVCgfunDDOeYIk5HnUsopKTSsDim7nnEpAAJzgAZ88VH9N0KeO+mvGljImCKyBGGBGCFwd3XpnlUkooTaG43sYqO8UcMJePbOxx3Mm49fTQj0o/YSq/A1I6KE2ndBKKkrMwKW69YvPbyQI6oZFZCzAtgMCDgAjnzpnRSWmoNXFfD2nvb28cDur92oQMqlchQAMgk8+VeOsaZNNLCyyIEicOUZWO5gCBzDDpnI5dQKdUU7u9xZVawi4t0Rry3MCuqZZWDlSxUodwK4Iwcj8aaWSyBFErKzgc2UFQfXgk4rpoovpYdtbibUdPmknhlSRFWIk7WRiTuUq3MMMcjy5VzcScNR3TwS/NlglR1bGcqrhmQ+o49xqRUUKTTuhOCd0zFJbDS5kupbiSRGEiqoARgUVM7VBLEY5sTy5k07ooTsNq5G9Q0KZ76K9ilRO7RkKlCd6t1VjuHQ8xyqRis0UN3BKwUn4u+g3P2Mn5TTilHFv0G5+xk/KaFuglszoorFFaMHDwd+of+kXX+Ikp9SvQbFoY2RiCTLM/LPSWV3A5+OGFNKzLc1HYKKKKRoKKKKACiiigAooooAjuicQNPeXdsUCi2KAMCSW3jPMeFdXFOsiztZLgjcVACr+8zEKq+8kVH49B1KG9urm1a1K3DKcSmXICDH7Ix512cYcOTXxt4+8CQo++XaWDMQPR2cscjnmaq1DMun5cjeWV9fvod3B2v/LLbvWTZIrMkiZzsZDzHP1EH309NRHhXheayubhll7y3m2t6bEyCQfOZjjBzk88+AqXViaWZ5djdO9u1uVpL2iXSLJO1tEYI7gwNiQhzg4yFK4PL11KeMeIjZ2yyxp3kkjokUZONzNz8PIZpTw3wBDFJLNdxxSyNO8kbekdqsdygg4GQfVXRxNwrNe3cLvN3dvCrECNiJO8b9oHGAOnPr1qr4Tkun5oSXEyu+474d1dbu1juUGN65K5+aw5Mp9hBFRTWeLtTt5YoGtbZ5ZjhI0ldm/iI2jC+v1Gm/BnDs1is8PeK8LSF4ckll3DmH5AdQDy9dI9N4a1eG4luy9lLNLy3yGb0F/cQBfRH+1KORN7W5XHJzaW9+ZYUecDd1xzx5+OK9K84c4G7GcDOOmfHFelRLoKKKKACiiigAooooAKT8XfQbn7GT8ppxS7XbNpraaFSA0kbKCegLAgZxTW4pbG1Fb/Jz5iindGLM6k6VtWqdK2rJQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiisGgAzWaoTi/tEvJp3W2laKFWIXZgFsHG5m68+uB5027NuPblrhLS7kMqynajtjcrYyASPnA9Odel4WajmPOsTByyly0UUV5j0GMUVmigDVOlbVqnStqACiovxnxnBp6r3itJI+dqLgch1JJ6Ck/CnabDdzrbvC0LvkIdwdSQM4zgEH3VRUpuOZLQm6sFLK3qWBRRRUygUUUq4i1uKzt2uJs7VwMDmWJ5BRTSvohN21Y1oqrrTtigMmJbZ0jJ+eGDEesrgfcTVmxOGAYcwRkHzBrU6coesjMKkZ+qz0orBNRHW+0XTrYlDIZXHVYhuwfIt80fGlGLk7JDlJRV2yX0VVknbLDn0bSQj1ug+4A136d2u2LnEscsXrIDj/AMTn7qo8PVX/AJJ8en1LEorh03VILhO8t5FkXzU59x8vfXdUSydwoorFAGaK5bm9jj+ewHq8fhXA+up4IT8BXlrY3D0XapNJ9OfgUhRnP1UOaKTJryeKkfA0wtr2OT5jA+rx+FFHG4es7U5pvpzCdGpD1kdNasMisis16iZ82cX8K3FnO6tGxiLExyAEgqTkAkdCOmDTrsv4VuJbuK5dGSGFt+5gRuI+aFz158yfVV23upwQ47+WOPPTeyrn2ZNb2l5FKN0Tq6+akMPiK9bxc3C1u88iw0VO9+46BWaKK8h6zFFGaKAMJ0ratU6VtQBSfbp9Mg+x/wBbVE+BPrK0+2SpZ25/TIPsf9bVE+BfrK0+2T8a6lL/AB+5/U5dT2/ej6YooorlnUCq/wC2v6uH2yfg1WBVf9tf1cv2yfg1Vo+0j8SVf2b+BRLdK+qdG+jw/Zp+UV8rN0NfU+kH/poj/wC0n5BXrx20e88uC3ZVfa1xk5kawt3KqvKZgcFif2AR4Dx9fLwqrq97+ZnlkdvnO7sfazEn8anPY9oUFxcSyTqH7kKUQ8xli3pEeONvL1mrrLQpkHetUsQ2DRrp13JbzMvmI3I+OK5JYmU7XUqR4MCD8DX1ePIUi4p4Wt76IpKoD49CQAbkPqPiPVXnjjddUXeD00Z89aDrdxaSia3cqfEeDDyYeIr6H4Q4ijvrZZ05H5rp+4w6j2eIPkRXz/qXDF5DObdoJGcHClFZg48GUgcwauHsq4YnsoZGuPReUqe7znaFBxnHLJzTxeRxUr6iwrmpZeRO6T6vqmz0I/neJ8v+a7dSue7jJHXoPaaiROeZr5H0z6RlQXCp+s930X3O7hMOpvNLZAzEnJOT50KhPQE+ym+laTuAeTp4Dz9Zp9FGqjCgAequbhPQtWvHPUllT72z01cbGDyxVyFMpHUEe2hGIOQcEeIqaSxKwwwBHrpDq2l7Bvj+b4jy/wCKWL9C1KEeJTlmS7mvMVLGRm8slY7NJ1Tf6D/O8D5/802qDqxBBHUVLtPuO8jDfH2jrXV9D+kJV4ulUfaXPqvsefF0FB5o7P5nz/2n3LvqlxvOQhVVHkAi8h7yT76fdhs7C7mjB9FotxHhlWAB+81HO0f60uv4x+RakHYd9Ol+xP51r7Gf+P3eR8/D2/eXhRRRXKOmYxRWaKANU6VtWqdK2oApPtz+mQfY/wCtqifAv1lafbJ+NSzty+mQfY/62qJ8C/WVp9sn411KXsO5nLqe3719D6YooorlnUCq/wC2r6uH2yfg1WBVf9tX1cPtk/BqpR9pElX9nIopuhr6n0b6ND9mn5RXyw3Q19T6N9Hh+zj/ACCvZjto955cFuz584/0B7O9kUj9HIzPEfAqxzt9q5x8POluga5PZzCa3bDdCDzDD91h4ivo7iDQre8iMNwm4dQRyKnzU+BqmeJezG9tyWtx8oi8NvJwPWnj7R8K1RxEJRyzM1aEovNHb5Ev0jtetmAF1E8TeJT01/8AkPhUz0jiayueVvcRuf3c4b+yef3V8zTRsrFXUqw6hgQR7QawrEHI5EdCOWPfTlg4PbQUcXNb6n1lRVEcH9pdzbssd0TND0yeboPMH9oeo/GrvsLyOaNZYmDI4yrDxBrw1aMqb1PbTrRqbCbiOX01XyGfj/8AlLLZVLjecLnnXbr364+wUtr8+9IVP+5OT1s+e2h9Bh4/2Ul0JWNTg/fH31t/KcH74++onWK9n9Q1v9Y+PmR/4+HVks/lWD98ffWG1KAjBcffUVoo/qGt/rHx8x/oIdWbTABiFORk4Pqpzw1L89fYf8qSU54bjO5m8MY++vN6Jk/1sXHnf9rFMVG1FplH9o/1pdfxj8i1IOw/6dL9ifzrUf7R/rS6/jH5FqQdh/06X7E/nWv06fsO5fQ+Sh7fvLwooorlHTMYooxRQBhOlbVqnStqAKY7dYSLi3fwMbL/AGWz/qqD8K3SxXttK3zVmjJPkNwBPuzVx9ruhtcWXeoMvbnfgeKkYce4Yb+rVD11MM1Kll7jmYhONW59Zg1mqv7Pu0WJo1tr19kigKsjfNcDkNx8G9vWrMjkVhlSCD4g5/CudOEoO0joQqRmro9KrXtvvFW0ih/aeXIHqRTk/Ege+pfxBxLaWaF7iUA+CDmzeoKOf+VUBxdxFJf3BnfkoG2NM52KPD2nqT/tV8NScpqXJEcTVSjlW7EbdK+qdG+jw/Zp+UV8rN0r6J4j1Ga30czQfrFhjwf3chQW9wJNXxivlRDCO2ZknknRSAzKCegJAz7K9a+Ubm5kkffI7O/XczEnPXqedXH2b8fxyxpa3km2ZfRV2PKUeGT4N4c+tQq4WUI3WvUtTxUZOz0J/qGlwTjbPEkg/nqG/Gq/4o7Kbd1L2J7qQZPdkko3q581/D1VZgpXruvW1pGZLiQKMcl/ab1KvUmoU5zi+wy1SEGu0j5jmiZGZHBDKSrA+BU4IPvq0uxDWW3y2TH0cd6nqIIVwPbkH41W2s3/AH9xLORjvJGfHluJIFTXsTtWa/eQD0UhYE+t2UAfcfhXTxFnRd/xnOoO1VWLR4iiw6t5jHwpdYyhZFZhkZ5++pLqlr3kZA6jmPaKihBBwa/N/S9KWHxfFjs9V8Vy+x9XhJqpSyPlp3Ey+Txn9lfgKPk0f7i/AUk0rVtoCSdPA+Xtp7HKrDKkH2V9JhMVQxME4WvzWlznVaU6btI1+Sx/uL8BR8mj/cX4CvVmA60qv9YVeUfpN9w/3qlerQoRzVLLuRmEJTdojEWyfur8BXoqgdKS6VqrO+x8c+hHL3U7owmIpYiHEpfDaw6lOVOWWR84do/1pdfxj8i1IOw/6dL9ifzrUf7R/rS6/jH5FqQdh/06X7E/nWu/P2Hd5HIh7fvLwooorlHTCiiigDVOlbVqnStqANGUEYPMGqO7ROz+S2dri1Qtbscso5mInry8U9fhV6VgiqUqrpu6J1KSmrM+TK94L2ZBhJZFHkrsv3A1f2u9nWnXJLmMxOerRELn2rgqfhUcbsagzyu5cetUJ+P/ABXvWLptangeFqJ6FPO5JyxJPmTk/E11R6XO0D3AjbuUIDSY5ZY4AB8eZ8Ku3SOyvToSGk7ycjwkI2/2VAz781MJdOhaEwNGvdFdpTAAx5YHSszxsU+yjccI36zPlVulfUlhbq9pHHIuVaJVZT4goAQaQWnZvpccgkEJJByAzsw9Xok8/fUwxUMTXjUtl5F8PQdO9z51444LmsJCQC1uT6Eg54B6K/kR5+NRavq+aJWUq6hlPIggEH2g1C9X7LtNmJZFeEn/ALTAD+ywI+GKrSxllafgRqYR3vApO21y7jXbHczKvkJHA9wzyrknndzukZnbzYlj8TVtSdjMefRu3x60U/gRXdY9kFkpBmmmk9WVQH4DP31X9VRWv0J/pqr0fzKe0vTZriUQwIXdvAeHrY9APWa+g+BOGFsLYR5DSOd0jDxPkPUOg958aa6RottbJst4ljHjgcz7T1PvpjXkr4h1NFoj1UcOoavcxSjVtL3+mnzvEef/ADTisYrn4nDU8RTdOotD2U6koSzRIQ6EHBGD5GhXI6Ej2cql9xao/wA9QfX/AM1wPoMZ+azD4GvmK3oGvB/2mmv2fkdKGOg121bxELSMerE+0mtKfLoC+Ln3AV2W2mRJzC5PmedTp+hMVUl/caXvbuOWNpRXZ8hdounNuEjDAHQefrp/RRX1GDwkMLT4cP5ZzatV1JZmfOHaP9aXX8Y/ItSDsP8Ap0v2J/OtTDjDs1ivJzcRzGKRsbxtDK2BgHGQQcAePhTDgjgeLTy7iQySuApYgKAAc4Ue3zPhXZliIOjl52ObGhNVcz2uTCiiivAe4KKKKANU6VtWqdK2oAKKK5r44icj9xvwNAHRRUQ7Lbh5NMieR2diZMsxLE4dvE86j/CfFfyXTDc3JklzdNHnduIzzByx6DB5VThO7S5OxPiKyfVXLPNao4IyCCPMVD7TjOK4kktnt54swPKpcBTJHggkAHKkjpml+hcTWlpptoLeKZ++LrDDlWkYiRtxJ6AZ/EUuHLoHFj1J4s6FigYFh1UEZGemR4V71WHDus7dQ1S7mgljKxQlosBnyoIAAU4OfD21I9J4xElx8mntpbdzEZl7woQUHUnafRPXkfI05UmhRqpknnnRBudgo82IA+Jr0FVHx5xaLyxYRWswgMqBbhgoVijg9M5AOORq02nSOLvHO1VTcxPgFGSaUqbilccaik2kbzTogBdlUE4BJA5nw517Cqj404o+WQW5S1mSE3MZjmcLtfaxHIA5Hq9hqX6txqkUssUNtLP3ABnaPYBHkZx6RG44BOBWnSkrdRKtHXpoS6sZrjsL9J4EnhOVkQMmeXUZGfKqh0iH5RcSRahf3Vtfd4dg3FUxn0QngfHA5eGKUKea9+Q51MtrLcuqs1FNR4nFvILSKGa6mjjDSbSo2qBjc7MRlj1wPOuW87RLVIreYJIy3Ak27QMq0eMoVz84kgcqSpyeyB1Yrdk1rzLgYBI59PX7KjekcXpNOLd4ZIXMAuB3m35pxkHB5EZ+6kcmvWt5Lp1w0M6lp5VgO5QDtAUu48j4ePI+dCpyvqgdSNtCw60Dg8gRy6+r21DzxzvlkS1s7i4SN9jyxhduc4IXceeP/vKuax1mxtZ9TnIlUo8ZmLEMGZlIURKD18Of4UcOXMHUiT2iohpfGySTJBcW01s0ql4jLtxIAMkeieRx4GtdI42NwytDZTtA77BMDHjrjcy7tyj20cOXQfEj1JjRRRWDYUUUUAFFFFAGqdK2rVOlbUAFeU8e5Sp6EEfEYpXqHE1jA5inuYo3GMqzAEZGRyPqrt07UIZ4xLBIsiHIDKQQcHB507O1xXT0K90WLWdPhayiskuEBbuphIijDEn0lJz6/CtZeDLtNKgtlUSTfKUmkAKgAHdu5sQDjlVmO4HMkD28q3qrrO97Lr8SSora/uIXq2i3L6mbhY8xfI5It2VHptuwuCc+PXGKjtjwzqFtDp1wkG+a171ZIN6AlZHcgq2ducN+FWtSq812GO5itH3d5KrMuBywgJOT4dKUakrWS/PxjlTju2QmDS9WMmo3KwiCaeKIQ4dGwV5Fc55NjxOBk1xaRwvfNdJLJbSRrJbywyPJOJWDOpBkOWJAJ6KPuqxtD1mC7i763fcm5lzgjmpweRplT40ldW9xngp2dyornRtXbTl0z5GuInX9KJY/0iq+4bFJ95z4DzNWTrenGezltwdpkiZM+RK4H300pfqmqw28L3ErgRxj0iPSxzAxgeOSKzKo5W0537zSpqN7srafS9XltLayayCi2kjzJ3sZ3iMkAquemOZz8K97/hieG8uX/k8Xsdw+9GEojKE53K4LDIyfuqc2/Edu9ylqhYu8InU45FCcA58/VTmtutJcvn5mVSi+Yr0S1aK0jjESRMqfq1YlVbrtDdSM1XvEljrF7GLW406HvNwxdCRMKAc5XnuHlj7qtavKaVUUuxAVQSSegAGST7qnCo4u5uVNSVis9U4UuIrtp/kny5JIo1I73u2R40VCeZGQduffXYnDlx3umOtokKQyTPLGjq4j37dpyTliceGedTywvYpo1lhdXRs4ZTkHBwcH2g10MQOZrXFlzM8GO5BO0nh67nMM9iMzKJIn5qv6OZcE5Yjpz/tVvqPDMiyaWlum6K1YiRsqMDYBuwTk5OTyqbqwIyDkeqtqSqOyXS/iadKLbfUrfQLbVNOElrFZC4jMrPHKJUQYcj54PPIxXlqfBt3P/KY2hO+khkgJZSHMYOQcHI6451ZtFPjNPMtxcJWs2V6tjqN7dWst1ai3S03NzdGMrkAALtPJfRHWl+maBei9ilgsmssPuuCs6vDIviFjBzk+zlVnuwAJ8hn4Uu4e1uK8gW4g3bGJA3DB9EkHl7qaqtLRabGXSjfVjSs1is1EuFFFFABRRRQBqnStq1TpW1AFT6qX/ly52WS3h7mL9GxRdvop6Xpgj1e+nHFGtXFnb2ohiSzSUnvm2d6tuSAcbUwCSSefqru1Pg+d72S9t71oHkVUIWNW5KAOrH+aD0r2m4evzEijUmLqX3M8MbLIHxhWTOOWOR9Zr0Z4PL9/4PNlks1vp/JD+M7i7l02ORru3nj+UIN8SEbua92T6WFIO/I9Y6VLItYu01C2spnjcPA7yMqFcspOCuScDGOXOuRuz4fIGs1nId5hOZNgA3ZHIIDyHLpmva64MnZ4JhfyCeKN42lKKS4cknAzhSMkDr4UOUGrX68v2BKad7dOYql45uUgu2Ko0qXhtoBggczyL8+eAD5V4iK9TWbL5bLHI3dTFTGhTHotlSM88HxppH2cRC1mtjO57yYTJIR6UbLyBJz6Xjk8uprqsOD5xdQ3lzeNNJErJjYFGGUqMYPLrk9c081NXt7+XuFlqO1/dz94n0niC6bTY5ke0tszyLJI4CKihjzRM4Zj16+deNvxvd/yfezB4pJLaVUSUIQsiswG4pn2/GmLdnhFvBFHc4e3meVHMYYEyHJDITg4x1r0/wD5+TDdwtds3ypkdmMa5VlbcxwDzz5csUZqXj0Hapy6fnic9rr2qC8toJzAou4pGVFUnuiiFl3Nn0vDPtNItBubqDS7+YtC6LLKO7aMnL94gZjlsFTk+j99T+54bD3dpdd4R8lR027fn7025znlSOPgCQRXUBvG7q4LkJsGELurljzyx9HHhQpwty5cuj8gcJ3/AH+X8i+TUhFqaXUg5JpfeMF5dCWIA8K5tL47vWkt5HZJEmkCvAkMoMSscBhKeTY5ZqWNwejTiaSQsvyT5Mybcbhzy2c8uvSufSOE7yDu411FzbxMCsfdoGIBzsZ8818OlLNC2oOM76CSDim+kvJIDcwWzrKUS3mib9IgbAYSZGSR0Aqd8RfQ7j7GX8jVGdR4JuLh1FxfGSFZO8CmJA4wxYKJM5C88dKl2oWvewyRZxvRkz1xuUrnHvrFRx0sbgpWdyr9J126tdK0wWqozTStGVfo2ZHwM59Hn4123mq6kw1CynkgLx23eB1jYDaykyIBuznBwD4Hn6qdw8DhYLGHvz/0c3eg7fn+mW2kZ5devOuyfhYNc3VwZT/1MHcldvzRjbuBzz9lbc4Xb+Pz8jChO37fIhtlxHdWWmWSh4i1xtWE7HIhjVRuLgEmRhkdMda6I+OruOC8LBZzAqNFMIniVt7Kh3I37pbwplB2fyC2jie9cywOGgkCACLaMbQueYPLOT4Vz8XWl3b6dcvcX0krSBEAWNVVMtg8hnAIOCfKtXpt231+pntxV+i+h4aZxDqLXsFt8qtplljEzskXzFHNk5PyyBgE+Y5V68NcR6tdRSXAFssUYlUF8rvkU+iTz9FACMn+afcq4Vungu4Le1ks51m5S/J4SpRAudzyZ8/P/OpfacGKmnS6eZmIkLneFwRvbd0zzxj30VMsdLLly9+o4Znz6/YSaBxTcvei0kuYLlHgd2aFdojdQcoGyQw/3FI+HOJ3tNKsoYSqyTyTDeys4jVHO5ti82PMYFS3SeBpYp4J5LwuYY2i2iJUBQqQAMHkcnJPPNaRdnoS1t4o7llmtnd4pgo5d4cspXPMdPHwozUtvzn9gy1Pn9BXFxnfi2vNqiaSAxmOYROgdZDhmMZ55Xn0p7wNq09wWZr2C5jCjkkZjdGJ6OpPTHTlzroj0C/7qQPqTmVyhV1jRQmw5ICZ5hvHnWeGeFmt7iW6mmEs0qhTtjWJQFOfmr1J5c6xKULO354G4xndX/P2JTRRRUC4UUUUAYFZoooAxRWaKTDmYooopABooorQAaDRRQDM1iiikIwKzRRSYwrNFFaQjFZoopAYrxufmms0UDOTTup9lMBRRTluYjsFAoopPc0goFFFNiM0UUUGgooooA//2Q==" alt="Logo de la empresa" class="company-logo" />
                                </span>
                            </div>
                        </div>
                        
                </div>
                <div class="summary">
                    <span class="summary__title">
                        Resumen general de tus pasantías
                    </span>
                    <div class="summary__content">
                       
                        <span class="summary__content__number">10 
                            <span class="summary__content__text">Solicitudes deInstituciones</span>
                        </span>
                        
                        <span class="summary__content__number">12
                            <span class="summary__content__text">Solicitudes de Pasantias</span>
                        </span>
                    </div>
                </div>
            </div>

          </div>


        <!--prueba -->
         

      
    
        <div class="card-inicio">
        <div class="card">
          <h1>Solicitudes de convocatorias</h1>
          <div class="EmpresasDestacadas">
           
            <div v-for="card in listInternship" :key="card.id" v-if="everyInternshipsAreLoaded" class="company-cards-container">
        
        <Tarjetitas 
        :name="card.institucion.nombreinstitucion" 
        :description="card.areapasantia "
        :a="card.tiempoacumplir.descripcion"
        :b="card.fechasolicitud"
        :c="card.fechaseleccionpasante"
        />
      
        </div>
       
      </div>
      <div class="container__button">
          <Button 
            text="Revisa tus convocatorias de empresas" 
            :color="0" 
            :disabled="false"
            @option-selected="Convocatorias"
            >
          </Button>
        </div>
        </div>
      </div>
    
        
        <div class="card-inicio">
        <div class="card">
          <h1>Solicitudes de empresas</h1>
          <div class="EmpresasDestacadas">
           
        <div v-for="card in listInstitution" :key="card.id" v-if="everyInternshipsAreLoaded" class="company-cards-container">
          
        <TarjetitasPasantias 
        :name="card.nombreinstitucion"
        :a="card.sectorpertenencia.nombresectorpertenencia "
        :b="card.nombrecontacto "
        :c="card.correocontacto "
        :d="card.celularcontacto "/>
        
        </div>
      
      </div>
      <div class="container__button">
          <Button 
            text="Revisa tus solicitudes de empresas " 
            :color="0" 
            :disabled="false"
            @option-selected="Empresas"
            >
          </Button>
        </div>
        </div>
      </div>
 

          <div class="student__principalPage">
            <div class="student__profile">
                <div class="profile__content__header">
                        <div class="content__welcome">
                          
                            <div class="student__data">
                                <span class="welcome__student">
                                  ¡Convocatorias activas o Solicitudes recibidas!
                                </span>
                                <br>
                                <span class="career__student">
                                 
                                  En esta plataforma podrás encontrar pasantías y prácticas
              profesionales que te ayudarán a desarrollar tus habilidades y
              competencias en el mundo laboral.
            </span>
            <div class="container__carrousel">
            <Carousel :listImages="PhotoService" />
          </div>
                            </div>
                        </div>
                        
                </div>
              
            </div>

          </div>
      

  </template>
  <script>
  import Tarjetitas from '../../components/common/Tarjetitas.vue';
  import TarjetitasPasantias from '../../components/common/TarjetitasPasantias.vue';
  import Carousel from "@/components/common/Carousel.vue";
  import Button from "@/components/common/Button.vue";
  import SimpleCard from "@/components/common/SimpleCard.vue";
  import { useLoaderStore } from "@/store/common/loaderStore";
  import {UseUseiInternshipStore }from "@/store/usei/UseiInternshipStore";
  import { UseUseiInstitutionStore } from "@/store/usei/UseiInstitutionStore";
  export default {
    components: {
      Carousel,
      SimpleCard,
      Button,
      Tarjetitas,
      TarjetitasPasantias
    },
    data() {
      return {
        listInstitution: [],
        listInternship: [],
        everyInternshipsAreLoaded: false,
        PhotoService:[
        {
              itemImageSrc: 'https://www.animafestexperience.net/internshipsabroad/wp-content/uploads/2019/08/ANIMAFEST-PASANTIAS-REMUNERADAS-min-min-800x333.jpg',
              thumbnailImageSrc: 'https://www.animafestexperience.net/internshipsabroad/wp-content/uploads/2019/08/ANIMAFEST-PASANTIAS-REMUNERADAS-min-min-800x333.jpg',
              alt: 'Explota todas tus habilidades ¡Enhorabuena!',
              title: '¡Bienvenido al Mundo Laboral!'
            },
            {
              itemImageSrc: 'https://idiomasseif.com/wp-content/uploads/2019/04/importancia-del-ingles-en-el-mundo-laboral.jpg',
              thumbnailImageSrc: 'https://idiomasseif.com/wp-content/uploads/2019/04/importancia-del-ingles-en-el-mundo-laboral.jpg',
              alt: 'Renueva tu empresa con los mejores estudiantes del país.',
              title: '¡Como institución puedes contratar a estudiantes y graduados!'
            },
            {
              itemImageSrc: 'https://media.gq.com.mx/photos/642447f1c632255eae24a045/master/w_1920,c_limit/trabajo.jpg',
              thumbnailImageSrc: 'https://media.gq.com.mx/photos/642447f1c632255eae24a045/master/w_1920,c_limit/trabajo.jpg',
              alt: '¡Estamos seguros de que pronto encontraras tu lugar...!',
              title: '¡Muéstranos todo lo que sabes!'
            },
        ],
      };
    },
    methods: {
      createAccount(option) {
        if (option) {
          console.log("createAccount");
          this.$router.push("/UserRegister");
        }
      },
      Empresas(option) {
      if (option) {
        console.log("createAccount");
        this.$router.push("/usei/Business");
      }
    },
    Convocatorias(option) {
      if (option) {
        console.log("createAccount");
        this.$router.push("/usei/InternshipApp");
      }
    },
    async getData() {
      
      useLoaderStore().activateLoader();

      await UseUseiInternshipStore().LoadPendenInternship();
// Asumiendo que LoadPendenInternship() actualiza InternshipList de manera similar a LoadInstitutions() en tu ejemplo.
      this.listInternship = UseUseiInternshipStore().InternshipList.result;
      await UseUseiInstitutionStore().LoadPendentInstitutions();
      // Asumiendo que LoadPendentInstitutions() actualiza InstitutionList de manera similar a LoadInstitutions() en tu ejemplo.
      this.listInstitution = UseUseiInstitutionStore().InstitutionList.result;

this.everyInternshipsAreLoaded = true;
useLoaderStore().desactivateLoader();



        
      },
    },
    created() {
      this.getData();
    },
  };
</script>
  <style scoped>
   
  
  @media screen and (max-width: 1250px) {
    .container__header__page{
      flex-direction: column;
    }
    .container__header__description{
      padding: 3% 7%;
    }
    .container__carrousel {
      width: 400px;
      height: 300px;
    }
    .container__problem{
      flex-direction: column-reverse;
    }
    .container__problem__description{
      padding: 3% 7%;
    }
    .container__problem__image{
      padding: 3% 7%;
    }
    .container__problem__image img{
      width: 300px;
      height: 200px;
    }
    .container__solution{
      flex-direction: column;
    }
    .container__solution__description{
      padding: 3% 7%;
    }
  }
  @media screen and (max-width: 768px) {
    .container__header__page{
      flex-direction: column;
    }
    .container__header__description{
      padding: 3% 7%;
    }
    .container__carrousel {
      width: 300px;
      height: 200px;
    }
    .container__problem{
      flex-direction: column-reverse;
    }
    .container__problem__description{
      padding: 3% 7%;
    }
    .container__problem__image{
      padding: 3% 7%;
    }
    .container__problem__image img{
      width: 200px;
      height: 150px;
    }
    .container__solution{
      flex-direction: column;
    }
    .container__solution__description{
      padding: 3% 7%;
    }
  }
  @media screen and (max-width: 425px) {
    .container__header__page{
      flex-direction: column;
    }
    .container__header__description{
      padding: 3% 7%;
    }
    .container__carrousel {
      width: 200px;
      height: 150px;
    }
    .container__problem{
      flex-direction: column-reverse;
    }
    .container__problem__description{
      padding: 3% 7%;
    }
    .container__problem__image{
      padding: 3% 7%;
    }
    .container__problem__image img{
      width: 150px;
      height: 100px;
    }
    .container__solution{
      flex-direction: column;
    }
    .container__solution__description{
      padding: 3% 7%;
    }
  }
  @media screen and (max-width: 375px) {
    .container__header__page{
      flex-direction: column;
    }
    .container__header__description{
      padding: 3% 7%;
    }
    .container__carrousel {
      width: 200px;
      height: 150px;
    }
    .container__problem{
      flex-direction: column-reverse;
    }
    .container__problem__description{
      padding: 3% 7%;
    }
    .container__problem__image{
      padding: 3% 7%;
    }
    .container__problem__image img{
      width: 150px;
      height: 100px;
    }
    .container__solution{
      flex-direction: column;
    }
    .container__solution__description{
      padding: 3% 7%;
    }
  }
  /**ARREGLO0S   DE COSAS */
  
  /* Estilos para la página de inicio de sesión */
  @media (max-width: 480px) {
    .top-section {
      flex-direction: column;
      align-items: center;
    }
  
    .left-section {
      width: 100%;
    }
  
    .right-section {
      width: 100%;
      text-align: center;
    }
  
    .company-logo {
      margin-top: 15px;
    }
  }
    
    .company-logo {
      max-width: 100%;
      height: auto;
    }
    
    
    h3 {
      font-size: 18px;
      color: #333;
      text-align: center;
      margin-bottom: 10px;
    }
    

    
    @media (min-width: 700px) {
      .company-logo {
      max-width:auto;
      height: 280px;
    }}
  
    @media (max-width: 700px) {
      .company-logo {
      max-width:auto;
      height: 150px;
    }
    
  }
.h1{
  padding: 10%;
  margin: 10%;
}
  /**prueba */

  .student__principalPage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    
}
.card-inicio{
  padding: 1rem;
  
}

.student__content__internship{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}


/*Estilos para el perfil del estudiante*/
.student__profile{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.card{
  width: 100%;
    border-radius: 10px;
    padding: 5%;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);}


.dark-theme .card{
    background-color: #434B54;
}
.dark-theme .student__profile{
    background-color: #434B54;
}
.profile__content__header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.content__welcome{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.student__data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
}
.welcome__student{
    font-size: 1.5rem;
    font-weight: 700;
}
.career__student{
    font-size: 1rem;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 30px;
}
.content__more{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.profile__button {
  padding: 0.9rem;
  margin: 0.5rem;
  color: #fff;
  cursor: pointer;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.profile__button:hover {
  background-position: 100% 0;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.profile__button:focus {
  outline: none;
}

.profile__button.bn23 {
    background-image: linear-gradient(
    to right,
    #25aae1,
    #4481eb,
    #04befe,
    #3f86ed
  );
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
.dark-theme .profile__button.bn23{
    background-image: linear-gradient(
    to right,
    #29323c,
    #485563,
    #2b5876,
    #4e4376
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}

.see_vitae{
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
}
.edit__Profile{
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
}
.summary{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
}
.summary__title{
    font-size: 1.5rem;
    font-weight: 700;
}
.summary__content{
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 1rem;
}
.summary__content__number{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 3rem;
    font-weight: 700;
}
.summary__content__text{
    font-size: 1rem;
    font-weight: 700;
    margin-left: 0.5rem;
}
/*Estilos para las pasantías del estudiante*/
/*Estilos para las pasantías activas del estudiante*/
.internship__active__by__student{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    margin: 0 0 1.5rem 0;
    height: 500px; 
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dark-theme .internship__active__by__student{
    background-color: #434B54;
}
.internship__active__by__student h1{
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem;
}
.container__cards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 100%;
    width: 80%;
}
/*Estilos para las solicitudes del estudiante*/

.requests__by__student{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    margin: 0 0 1.5rem 0;
    height: 500px; 
    border-radius: 10px;
    background-color: #Fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container__requests{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.dark-theme .requests__by__student{
    background-color: #434B54;
}
.container__little__nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.container__Arrow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
}



/* Estilos para dispositivos pequeños (teléfonos) */

@media only screen and (max-width: 600px) {
  /* Estilos específicos para dispositivos pequeños */
    .student__principalPage{
            padding: 0.5rem;
    }
    .profile__content__header{
        flex-direction: column;
  }
    .content__welcome{
        width: 100%;
        margin-bottom: 0.3rem;
    }
    .content__more{
        width: 100%;
    }
    .profile__button{
        margin: 0.2rem;
        padding: 0.5rem;
        font-size: 0.4rem;
    }
    .profile__button span{
        font-size: 0.6rem;
    }
    .summary__content{
        flex-wrap: wrap;
    }
    .summary__title{
        font-size: 1rem;
        font-weight: 700;
    }
    .summary__content__number{
        font-size: 1.2rem;
    }
    .summary__content__text{
        font-size: 0.6rem;
    }





}

@media only screen and (max-width: 480px) {
  /* Estilos específicos para dispositivos pequeños */
    .student__profile{
           flex-direction: column;
    }
    
}



/* Estilos para tabletas */
@media only screen and (min-width: 600px) and (max-width: 1024px) {
  /* Estilos específicos para tabletas */
  .student__principalPage{
        padding: 1rem;
    
  }
  .profile__content__header{
        flex-direction: column;
  }
    .content__welcome{
        width: 100%;
        margin-bottom: 0.5rem;
    }
    .content__more{
        width: 100%;
    }
    .profile__button{
        margin: 0.3rem 0.3rem;
        padding: 0.8rem;
        font-size: 0.6rem;
    }
    .profile__button span{
        font-size: 0.8rem;
    }
    .summary__content{
        flex-wrap: wrap;
    }
    .summary__title{
        font-size: 1.3rem;
        font-weight: 700;
    }
    .summary__content__number{
        font-size: 1.5rem;
    }
    .summary__content__text{
        font-size: 0.8rem;
    }
}
@media only screen and (min-width: 600px) and (max-width: 1024px) {
  /* Estilos específicos para tabletas */
  .student__principalPage{
        padding: 1rem;
    
  }
  .profile__content__header{
        flex-direction: column;
  }
    .content__welcome{
        width: 100%;
        margin-bottom: 0.5rem;
    }
    .content__more{
        width: 100%;
    }
    .profile__button{
        margin: 0.3rem 0.3rem;
        padding: 0.8rem;
        font-size: 0.6rem;
    }
    .profile__button span{
        font-size: 0.8rem;
    }
    .summary__content{
        flex-wrap: wrap;
    }
    .summary__title{
        font-size: 1.3rem;
        font-weight: 700;
    }
    .summary__content__number{
        font-size: 1.5rem;
    }
    .summary__content__text{
        font-size: 0.8rem;
    }
}

/* Estilos para dispositivos medianos */
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  /* Estilos específicos para dispositivos medianos */
  .student__principalPage{
        padding: 1.5rem;
  }
}

/* Estilos para dispositivos grandes (pantallas de escritorio) */
@media only screen and (min-width: 1441px) {
  /* Estilos específicos para dispositivos grandes */
}

.EmpresasDestacadas {
  display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: #434B54;
    margin: 0.5rem;
    
    overflow: auto;
    overflow-x: scroll;
    
}
.EmpresasDestacadas {
  background-color: #Fff;
    
}

.dark-theme .EmpresasDestacadas {
 background: #434B54;
 padding: 0.1rem;
   
    
}
.company-cards-container {
  display: inline-flex;
}
.container__button{
  display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    justify-content: space-around;
}
.button{
  height: 50px;
}


@media screen and (max-width: 380px){
  
  .EmpresasDestacadas{
    padding: 0.5rem;
    height: 320px;
  }

}
</style>