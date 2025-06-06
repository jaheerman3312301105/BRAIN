"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  judul: z.string().min(10, { message: "Minimal 10 karakter" }),
  jenis: z.string().min(1, { message: "Jenis infrastruktur harus dipilih" }),
  deskripsi: z.string().min(10, { message: "Minimal 10 karakter" }),
  cuaca: z.string().min(1, { message: "Kondisi cuaca harus dipilih" }),
})

export default function LaporForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      judul: "",
      jenis: "",
      deskripsi: "",
      cuaca: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="bg-white border border-[#CAD5E2] p-6 rounded-3xl">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                control={form.control}
                name="judul"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Judul Pengaduan</FormLabel>
                    <FormControl className="border border-[#CAD5E2]">
                        <Input className="px-3 py-5" type="input" placeholder="Jalan di simpang lampu merah berlubang" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                  control={form.control}
                  name="jenis"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Infrastruktur</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="border border-[#CAD5E2] w-full px-3 py-5">
                          <SelectTrigger>
                            <SelectValue className="text-base font-normal" placeholder="Piih jenis infrastruktur" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="jalan">Jalan</SelectItem>
                          <SelectItem value="lampu jalan">Lampu Jalan</SelectItem>
                          <SelectItem value="jembatan">Jembatan</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <FormField
                control={form.control}
                name="deskripsi"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Deskripsi Pengaduan</FormLabel>
                    <FormControl className="border border-[#CAD5E2]">
                        <Input className="px-3 py-5" type="input" placeholder="Jalan berlubang penyebab kecelakaan motor kemarin sore  dan sudah satu bulan belum diperbaiki sama sekali" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                  control={form.control}
                  name="cuaca"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cuaca</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="border border-[#CAD5E2] w-full px-3 py-5">
                          <SelectTrigger>
                            <SelectValue className="text-base font-normal" placeholder="Piih kondisi cuaca" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cerah">Cerah</SelectItem>
                          <SelectItem value="hujan">Hujan</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="bg-[#0063F4] text-white rounded-full" type="submit">Kirim</Button>
            </form>
        </Form>
    </div>
  )
}
